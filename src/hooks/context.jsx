import { useContext, useState, createContext } from 'react'

import defaultUser from '../data/defaultUser.js'

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ msg: '', error: false })
  const [user, setUser] = useState(defaultUser)

  const fetchUserData = async () => {

    setIsLoading(true)
    try {
      const response = await fetch('https://api.github.com/users/john-smilga')
      const data = await response.json()
      setUser(data)

    } catch (e) {
      setIsError({ msg: 'error', error: true })
      console.log(e)

    }

    setIsLoading(false)

  }

  const contextData = {
    fetchUserData,
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
