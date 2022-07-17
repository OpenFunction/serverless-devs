# OpenFunction Component for Serverless Devs

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
