import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

createRoot(document.getElementById('root')).render(

  <Provider store={appStore}>
     <StrictMode>
    <App />
  </StrictMode>

  </Provider>,
)
