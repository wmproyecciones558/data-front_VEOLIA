import { Navigate, Route, Routes } from 'react-router-dom';
import  HomePage  from '../pages/HomePage';
import Dasboard from "../pages/Dasboard"
import { CalloutUsageExample } from "../components/CalloutUsageExample";
import { DividerUsageExample } from "../components/DividerUsageExample";
import { LegendExample } from "../components/LegendExample";
import { AreaChartHero } from "../components/AreaChartHero";
import Home from "../components/Home"
import LoginPage from '../Auth/LoginPage';



const PrivateRoutes = () => {

    return (

        <div >
        <Routes>
           <Route index element={<LoginPage />} />
           <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<Dasboard />}>
                    <Route path='home' element={<Home />} /> 
                    <Route path='aguaId' element={<CalloutUsageExample />} /> 
                    <Route path='corrienteId' element={<DividerUsageExample/>} /> 
                    <Route path='tierraId' element={<LegendExample /> } />
                    <Route path='aireId' element={<AreaChartHero/> } />
            </Route>
            
            
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes></div>
    );
};
export default PrivateRoutes