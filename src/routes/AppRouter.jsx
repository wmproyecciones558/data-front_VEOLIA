import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import HomePage from '../pages/HomePage'
import LoginPage from '../Auth/LoginPage'

import PrivateRoutes from'./PrivateRoutes'

//const checking ="checking"
//const clave  ="hola";
const texto ="authenticated";

 const AppRouter = () => {

    if ( texto === "checking") return <div className="loading">Checking credentials...</div>
    return (
        <BrowserRouter>
            <Routes>
            {
                    texto === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="login" element={<LoginPage />} />
                }
                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter