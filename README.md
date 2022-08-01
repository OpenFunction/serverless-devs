# OpenFunction Component for Serverless Devs
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

`ofn` is a [Serverless Devs](https://docs.serverless-devs.com/en) component developed for [OpenFunction](https://openfunction.dev).

> See also [Component Model Specification](https://docs.serverless-devs.com/en/sdm/serverless_package_model/package_model#component-model-specification) to learn more details about the directory structure and content meanings.

## Features

- [x] Build function image locally with [pack](https://buildpacks.io/docs/tools/pack/) command-line tool
  - `pack` tool should be installed before running `build` command
- [x] Deploy or remove the function over target Kubernetes context
- [ ] upcoming more features ...

## Quickstart

Clone the project and try running the sample:

```plain
$ git clone https://github.com/openfunction/serverless-devs
$ cd serverless-devs/example

$ s ofn help

ofn component

  You can use the component to manage your OpenFunction source and function     
  custom resources.                                                             

Usage

  $ s <command> <options> 

Command List

  help     Display help information.                                     
  build    Build function image locally with pack tool.                  
  deploy   Deploy or remove the function over target Kubernetes context. 

Examples

  1. A build example.     $ s ofn build         
  2. A deploy example.    $ s ofn deploy        
  3. A remove example.    $ s ofn deploy delete 

  Project home: https://github.com/openfunction/serverless-devs 
```

## Related

- [Serverless Registry](http://www.devsapp.cn/details.html?name=ofn)

```plain
package:     ofn
description: Serverless Devs for OpenFunction
version:     0.1.0
zipball_url: https://registry.devsapp.cn/simple/ofn/zipball/0.1.0
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/rsonghuster"><img src="https://avatars.githubusercontent.com/u/10919599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>xiliu</b></sub></a><br /><a href="https://github.com/OpenFunction/serverless-devs/issues?q=author%3Arsonghuster" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!