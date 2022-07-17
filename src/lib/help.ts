const COMPONENT = [
  {
    header: 'ofn component',
    content: 'You can use the component to manage your OpenFunction source and function custom resources.',
  },
  {
    header: 'Usage',
    content: '$ s <command> <options>',
  },
  {
    header: 'Command List',
    content: [
      { name: 'help', summary: 'Display help information.' },
      { name: 'build', summary: 'Build function image locally with pack tool.' },
      { name: 'deploy', summary: 'Deploy or remove the function over target Kubernetes context.' },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        desc: '1. A build example. ',
        example: '$ s ofn build',
      },
      {
        desc: '2. A deploy example. ',
        example: '$ s ofn deploy',
      },
      {
        desc: '3. A remove example. ',
        example: '$ s ofn deploy delete',
      },
    ],
  },
  {
    content: 'Project home: {underline https://github.com/openfunction/serverless-devs}',
  },
];

export const HelpMessages = {
  COMPONENT,
};