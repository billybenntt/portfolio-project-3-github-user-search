import { useContext, useState, createContext } from 'react'

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState({ msg: '', error: false })
  const [user, setUser] = useState([])

  const fetchData = async () => {

    const response = await fetch("https://api.github.com/users/octocat")

    console.log(response)


  }

  const contextData = {
    isLoading,
    isError,
    user
  }

  return (
    <AppContext.Provider value={{ ...contextData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
