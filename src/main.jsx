import App from './App.jsx'
import '/src/styles/output.css'
import 'react-toastify/dist/ReactToastify.css'

import ReactDOM from 'react-dom/client'
import { AppProvider } from '/src/hooks/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <App/>
    </AppProvider>
  </>,
)
