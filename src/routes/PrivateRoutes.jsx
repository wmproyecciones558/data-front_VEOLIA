import { Navigate, Route, Routes } from 'react-router-dom';
import  HomePage  from '../pages/HomePage';
import Dasboard from "../pages/Dasboard"
import { CalloutUsageExample } from "../components/CalloutUsageExample";
import { DividerUsageExample } from "../components/DividerUsageExample";
import { LegendExample } from "../components/LegendExample";
import { AreaChartHero  } from "../components/AreaChartHero";
import NewPost from "../components/NewPost"
import Post from "../components/Post"

const PrivateRoutes = () => {
    return (
        <Routes>
           <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Dasboard />}>
                    <Route path='new' element={<LegendExample />} /> {/*A nested route!*/}
                    <Route path=':corrienteId' element={<DividerUsageExample />} /> {/*A nested route!*/}
                    <Route path='tierraId' element={<AreaChartHero />} />
                    <Route path=':aireId' element={<CalloutUsageExample />} />
                </Route>
            
            
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};
export default PrivateRoutes