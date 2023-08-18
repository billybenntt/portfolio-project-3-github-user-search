import { useContext, useState, createContext, useEffect } from 'react'
import defaultUser from '../data/defaultUser.js'
const AppContext = createContext(undefined)

const getLocalStorage = () => {
  return localStorage.getItem('theme') || 'light'
}


function AppProvider ({ children }) {

  const [theme, setTheme] = useState(() => getLocalStorage())
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ msg: '', error: false })
  const [user, setUser] = useState(defaultUser)

  useEffect(() => {
    /*Get HTML Element and assign Default class */
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const fetchUserData = async (user) => {


    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
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
    toggleTheme,
    theme,
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

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
