import { useState } from 'react'
import DesignSystem from './pages/DesignSystem.jsx'
import Search from './pages/Search.jsx'

function App () {
  const [count, setCount] = useState(1)

  return (
    <>
      <Search/>
    </>
  )
}

export default App
