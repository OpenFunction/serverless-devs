import { KubeConfig, KubernetesObjectApi, KubernetesObject } from '@kubernetes/client-node';
import { jsyaml, fse } from '@serverless-devs/core';

export class KubernetesClient {
  readonly #config: KubeConfig;
  readonly #client: KubernetesObjectApi;

  constructor(configFile?: string) {
    this.#config = new KubeConfig();
    configFile ? this.#config.loadFromFile(configFile) : this.#config.loadFromDefault();

    this.#client = KubernetesObjectApi.makeApiClient(this.#config);
  }

  public async apply(specPath: string): Promise<KubernetesObject[]> {
    const validSpecs = await this.#readSpecFile(specPath);

    const created: KubernetesObject[] = [];
    for (const spec of validSpecs) {
      // this is to convince the old version of TypeScript that metadata exists even though we already filtered specs
      // without metadata out
      spec.metadata = spec.metadata || {};
      spec.metadata.annotations = spec.metadata.annotations || {};
      delete spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'];
      spec.metadata.annotations['kubectl.kubernetes.io/last-applied-configuration'] = JSON.stringify(spec);

      try {
        // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch block.
        await this.#client.read(spec);
        // we got the resource, so it exists, so patch it
        const response = await this.#client.patch(spec);
        created.push(response.body);
      } catch (e) {
        // we did not get the resource, so it does not exist, so create it
        const response = await this.#client.create(spec);
        created.push(response.body);
      }
    }
    return created;
  }

  public async delete(specPath: string): Promise<void> {
    const validSpecs = await this.#readSpecFile(specPath);

    for (const spec of validSpecs) {
      await this.#client.delete(spec);
    }
  }

  async #readSpecFile(specPath: string): Promise<KubernetesObject[]> {
    const specString = await fse.promises.readFile(specPath, 'utf8');
    const specs: KubernetesObject[] = jsyaml.loadAll(specString);
    return specs.filter((s) => s && s.kind && s.metadata);
  }
}