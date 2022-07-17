import { inquirer, execa, help } from '@serverless-devs/core';

import logger from './common/logger';
import { InputProps } from './common/entity';
import { KubernetesClient } from './lib/k8s';
import { HelpMessages } from './lib/help';

export default class OpenFunction {
  public async build(inputs: InputProps): Promise<void> {
    const { src, builder, env } = inputs.props || {};

    const prompts = await inquirer.prompt([
      {
        type: 'input',
        name: 'builder',
        message: 'Which builder to use?',
        default: builder,
      },
      {
        type: 'input',
        name: 'function',
        message: 'Which function to invoke?',
        default: env.FUNC_NAME,
      },
      {
        type: 'confirm',
        name: 'production',
        message: 'Is this for produnction?',
        default: env.NODE_ENV === 'production',
      },
      {
        type: 'input',
        name: 'image',
        message: "What's the output image? (e.g. 'image:tag' or 'repository/image:tag')",
      },
    ]);

    await execa.command([
      'pack build -v',
      `-p ${src}`,
      `-B ${prompts.builder}`,
      `-e FUNC_NAME=${prompts.function}`,
      `-e NODE_ENV=${prompts.production ? 'production' : 'dev'}`,
      prompts.image
    ].join(' '));
  }

  public async deploy(inputs: InputProps): Promise<void> {
    const isDelete = inputs.argsObj.includes('delete');
    const action = isDelete ? 'delete' : 'apply';

    const prompts = await inquirer.prompt([
      {
        type: 'input',
        name: 'kubeconfig',
        message: 'Which kubeconfig to use? (Leave empty to use default)',
      },
      {
        type: 'input',
        name: 'function',
        message: `Which function to ${action}?`,
        default: inputs.props.function,
      }
    ]);

    logger.info(`Function to ${action}: ${prompts.function}`);
    const { confirmed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmed',
        message: `Are you confirmed to ${action} function?`,
        default: false,
      }
    ]);
    if (!confirmed) return;

    const kubectl = new KubernetesClient(prompts.kubeconfig);
    await kubectl[action](prompts.function);
  }

  public help(): void {
    help(HelpMessages.COMPONENT);
  }
}
