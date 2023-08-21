import Search from './pages/Search.jsx'
import { ToastContainer } from 'react-toastify'

function App () {

  return (
    <>
      <Search/>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        theme="colored"
        pauseOnHover={false}
        pauseOnFocusLoss={false}/>
    </>
  )
}

export default App
