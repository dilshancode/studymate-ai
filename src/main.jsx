import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

// Initialize the root node and mount the React application inside index.html's 'root' div
createRoot(document.getElementById('root')).render(
  // StrictMode triggers extra checks and warnings for safety during development
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
