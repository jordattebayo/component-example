import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Button from './components/button'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Components Example</h1>
      <div class="wrapper">
        <Button variant={"light"} />
        <Button variant={"dark"} />
        <button onClick={() => setCount((count) => count + 1)} class="different-button">
          count is {count}
        </button>
      </div>
    </>
  )
}
