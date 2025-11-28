import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';   
import './fonts.css';   
 import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { Provider } from './Components/Global.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
)
