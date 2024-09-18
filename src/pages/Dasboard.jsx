//import React from 'react'
//import '../app.scss'
import Sidebar from '../components/Sidebar'
//import AppRouter from '../routes/AppRouter'
import {Outlet} from "react-router-dom"
//import {useParams} from 'react-router-dom';




const Dasboard = () => {
  return (

    <div  className='flex bg-slate-100'>
     <h1> padre 1</h1>
     <section> <Sidebar/> </section>
     <section> <Outlet/> </section>
     
     
    </div>
     
    
  )
}
 export default Dasboard 