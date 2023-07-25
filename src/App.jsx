import { useState } from 'react'

import DesignSystem from './pages/DesignSystem.jsx'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <DesignSystem/>
    </>
  )
}

export default App
