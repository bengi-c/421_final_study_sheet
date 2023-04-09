import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Page1} from "./pages/Page1";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Page 1</h1>
      <Page1/>
        <h1>Page 2</h1>
        <Page1/>
    </div>
  )
}

export default App
