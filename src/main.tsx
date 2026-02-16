import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApplicationDataProvider } from './component/Context/context.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApplicationDataProvider>
    <App />
    </ApplicationDataProvider>
  </StrictMode>,
)
