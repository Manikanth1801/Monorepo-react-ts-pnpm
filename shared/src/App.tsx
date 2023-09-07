import { useState } from 'react'
import ButtonComponent from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonComponent caption={'Check'} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Shared</h1>

    </>
  )
}

export default App
