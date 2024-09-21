import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom"
import '@tremor/react/dist/lib/tremorTwMerge.cjs'
import App from './App.jsx'
import Private from './routes/PrivateRoutes.jsx'
import './index.css'

import  Login from'./Auth/LoginPage.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Private />
    </BrowserRouter>
    
  </StrictMode>,
)