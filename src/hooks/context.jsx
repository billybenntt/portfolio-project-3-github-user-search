import { useContext, useState, createContext } from 'react'

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState({ msg: '', error: false })

  const contextData = {
    isLoading,
    isError,
  }

  return (
    <AppContext.Provider value={{ ...contextData }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider }
