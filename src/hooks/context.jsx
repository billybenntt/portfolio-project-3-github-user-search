import { useContext, useState, createContext, useEffect } from 'react'
import defaultUser from '../data/defaultUser.js'
import { toast } from 'react-toastify'

const AppContext = createContext(undefined)

const getLocalStorage = () => {
  return localStorage.getItem('theme') || 'light'
}

function AppProvider({ children }) {

  const [theme, setTheme] = useState(() => getLocalStorage())
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ msg: '', error: false })
  const [user, setUser] = useState(defaultUser)
  const [search, setSearch] = useState('')

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

  const resetUser = () => {
    setUser(defaultUser)
    setSearch('')

  }

  const fetchUserData = async (user) => {

    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (response.ok) {
        const data = await response.json()
        setUser(data)
        setSearch('')
      } else {
        toast.error('User not found')
        resetUser()
      }
    } catch (e) {
      setIsError({ msg: 'error', error: true })
    }
    setIsLoading(false)
  }

  const contextData = {
    fetchUserData,
    toggleTheme,
    resetUser,
    search,
    setSearch,
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
