import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@digdir/designsystemet-css'
import './theme/design-tokens-build/theme.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
