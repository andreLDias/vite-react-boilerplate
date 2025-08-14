# Testes com Vitest

Este projeto usa [Vitest](https://vitest.dev/) para testes unitários e de integração.

## Scripts disponíveis

- `pnpm test` - Executa os testes em modo watch
- `pnpm test:run` - Executa os testes uma vez
- `pnpm test:ui` - Abre a interface gráfica do Vitest
- `pnpm test:coverage` - Executa os testes com relatório de cobertura

## Estrutura dos testes

- `src/test/setup.ts` - Configuração global dos testes
- `src/test/vitest.d.ts` - Tipos TypeScript para o Vitest
- `*.test.tsx` - Arquivos de teste para componentes React
- `*.test.ts` - Arquivos de teste para utilitários

## Exemplo de teste

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## Configuração

O Vitest está configurado em `vitest.config.ts` com:

- Suporte a React
- Ambiente jsdom para DOM
- CSS habilitado
- Arquivo de setup global

## CI/CD com GitHub Actions

### Workflow de Testes

O projeto inclui um workflow automático que executa:

- **Triggers**: Push e Pull Requests para `main` e `develop`
- **Node.js**: Versões 18.x e 20.x (matriz de testes)
- **Etapas**:
  1. Setup do ambiente
  2. Cache de dependências
  3. Instalação com pnpm
  4. Linting com Biome
  5. Execução dos testes
  6. Relatório de cobertura
  7. Upload para Codecov

### Workflow de Deploy

Após os testes passarem na branch `main`:

- Build automático do projeto
- Deploy para GitHub Pages
- Publicação da pasta `dist`

### Arquivos de Workflow

- `.github/workflows/test.yml` - Pipeline de testes
- `.github/workflows/deploy.yml` - Pipeline de deploy

### Badges (opcional)

Adicione estes badges ao seu README:

```markdown
![Testes](https://github.com/seu-usuario/seu-repo/workflows/Testes/badge.svg)
![Deploy](https://github.com/seu-usuario/seu-repo/workflows/Deploy/badge.svg)
```
