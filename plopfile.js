export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
        validate: (value) => {
          if (!value) return 'Component name is required'
          if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            return 'Component name must start with uppercase letter and contain only letters'
          }
          return true
        },
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Include test file?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'withStory',
        message: 'Include Storybook story file?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.spec.tsx',
        templateFile: 'plop-templates/component/component.spec.tsx.hbs',
        skipIfExists: true,
        skip: (data) => !data.withTest,
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/component/component.stories.tsx.hbs',
        skipIfExists: true,
        skip: (data) => !data.withStory,
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /$/,
        template: "export { default as {{name}} } from './{{name}}';\n",
      },
    ],
  })
}
