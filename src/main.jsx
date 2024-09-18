import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@tremor/react/dist/lib/tremorTwMerge.cjs'
import App from './App.jsx'
import './index.css'
import Sidebar from './components/Sidebar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)