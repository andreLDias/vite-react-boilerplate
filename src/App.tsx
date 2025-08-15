import { useState } from 'react'
import viteLogo from '/vite.svg'
import * as S from './App.style'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <S.Root>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <S.Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <S.AnimatedReactLogo src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <S.Card>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </S.Card>
      <S.ReadTheDocs>
        Click on the Vite and React logos to learn more
      </S.ReadTheDocs>
    </S.Root>
  )
}

export default App
