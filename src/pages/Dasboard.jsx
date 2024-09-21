//import React from 'react'
//import '../app.scss'
import Sidebar from '../components/Sidebar'
//import AppRouter from '../routes/AppRouter'
import {Outlet} from "react-router-dom"
//import {useParams} from 'react-router-dom';
import Login from "../Auth/LoginPage"
import Navbar from "../components/Navbar";




const Dasboard = () => {
  return (
    
    <>
    <section><Navbar/></section>
    <div  className=' dasboard flex  '>
     
     <section > <Sidebar/> </section>
     <section> <Outlet/> </section>
     
     
    </div>
     
     </>
     
  )
}
 export default Dasboard 