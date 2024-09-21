import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import "./app.scss";
//import AppRouter from "./routes/AppRouter";
//import Prueba from "./pages/prueba"
//import LoginPage from './Auth/LoginPage';
//import Navbar from "./components/Navbar";
//import { useState } from 'react';
//import PrivateRoutes from "./routes/PrivateRoutes";




function App() {

  const [datos, estableceDatos] = useState('');
  
  const hijoAPadre = (datoshijo) => {
    estableceDatos(datoshijo);
  } 
      console.log(datos);
      
  return (
    <>
      
      <div className="App">
     

        </div>
      

    </>
  );
}

export default App;