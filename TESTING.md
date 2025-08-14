![Tests](https://github.com/andreLDias/vite-react-boilerplate/workflows/Tests/badge.svg)

# Testing with vitest

This boilerplate uses [Vitest](https://vitest.dev/).

## Available scripts

- `pnpm test` - Run tests on watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:ui` - Open vitest graphic interface
- `pnpm test:coverage` - Run tests with coverage reports

## Tests structure

- `src/test/setup.ts` - Global test setup
- `src/test/vitest.d.ts` - TypeScript types for Vitest
- `*.test.tsx` - Test files for React components
- `*.test.ts` - Test files for utilities

## Example

```tsx
import { render, screen } from "@testing-library/react"
import MyComponent from "./MyComponent"

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />)
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
})
```

## Configuration

Vitest is configured in `vitest.config.ts` with:

- React support
- jsdom environment for DOM
- CSS enabled
- Global setup file

## CI/CD with GitHub Actions
...

### Tests workflow

The project includes an automated workflow that performs:

- **Triggers**: Push and Pull Requests to `main` and `develop`
- **Node.js**: Versions 18.x and 20.x (test matrix)
- **Steps**:
  1. Environment setup
  2. Dependency cache
  3. Installation with pnpm
  4. Linting with Biome
  5. Test execution
  6. Coverage report


### Workflow files

- `.github/workflows/test.yml` - Pipeline de testes

### Badges (optional)

Add this badge to your README:

```markdown
![Tests](https://github.com/your-user/your-repo/workflows/Tests/badge.svg)
```
