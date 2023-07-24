import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
     <h1>App Component {count}</h1>
    </>
  )
}

export default App
