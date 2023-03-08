import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Menu } from './Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Menu />
    </div>
  )
}

export default App
