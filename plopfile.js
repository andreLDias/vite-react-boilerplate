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
        path: 'src/components/{{name}}/{{name}}.style.ts',
        templateFile: 'plop-templates/component/component.style.ts.hbs',
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

  plop.setGenerator('customHook', {
    description: 'Create a new custom hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (without "use" prefix):',
        validate: (value) => {
          if (!value) return 'Hook name is required'
          if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            return 'Hook name must start with uppercase letter and contain only letters'
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
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{name}}/{{name}}.ts',
        templateFile: 'plop-templates/customHook/customHook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/{{name}}/index.ts',
        templateFile: 'plop-templates/customHook/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/{{name}}/{{name}}.spec.ts',
        templateFile: 'plop-templates/customHook/customHook.spec.ts.hbs',
        skipIfExists: true,
        skip: (data) => !data.withTest,
      },
      {
        type: 'modify',
        path: 'src/hooks/index.ts',
        pattern: /$/,
        template: "export { use{{name}} } from './{{name}}';\n",
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator('helper', {
    description: 'Create a new helper function',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Helper name:',
        validate: (value) => {
          if (!value) return 'Helper name is required'
          return true
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Helper description:',
        default: 'Helper function',
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: 'Include test file?',
        default: true,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/helpers/{{name}}/{{name}}.ts',
        templateFile: 'plop-templates/helpers/helper.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/helpers/{{name}}/index.ts',
        templateFile: 'plop-templates/helpers/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/helpers/{{name}}/{{name}}.spec.ts',
        templateFile: 'plop-templates/helpers/helper.spec.ts.hbs',
        skipIfExists: true,
        skip: (data) => !data.withTest,
      },
      {
        type: 'modify',
        path: 'src/helpers/index.ts',
        pattern: /$/,
        template: "export { {{camelCase name}} } from './{{name}}';\n",
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a new page component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name:',
        validate: (value) => {
          if (!value) return 'Page name is required'
          if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            return 'Page name must start with uppercase letter and contain only letters'
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
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/page/page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{name}}/{{name}}.style.ts',
        templateFile: 'plop-templates/page/page.style.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{name}}/index.ts',
        templateFile: 'plop-templates/page/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{name}}/{{name}}.spec.tsx',
        templateFile: 'plop-templates/page/page.spec.tsx.hbs',
        skipIfExists: true,
        skip: (data) => !data.withTest,
      },
      {
        type: 'modify',
        path: 'src/pages/index.ts',
        pattern: /$/,
        template: "export { {{name}}Page } from './{{name}}';\n",
        skipIfExists: true,
      },
    ],
  })
}
