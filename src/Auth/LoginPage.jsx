import { TextInput } from "@tremor/react";
import { Card } from "@tremor/react";
import React from "react";
import { useState } from "react";
//import { useEffect } from "react";
//import {Link } from 'react-router-dom';
//import Prueba from "../pages/prueba"
//import PrivateRoutes from '../routes/PrivateRoutes'
//import Dasboard from "../pages/Dasboard";
import { Link, useNavigate } from 'react-router-dom';


export const LoginPage = (  ) => {
  const [user, setUser] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [error, setError] = useState(true);
  const [llave, setLlave] =useState(false);
  const [mensaje, setMensaje]= useState('')


  const navigate = useNavigate();

  const onChangeUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    validar(e)
  };

  const onChangeMail = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };

  const onChangePass = (e) => {
    e.preventDefault();
    setpass(e.target.value);
  };

  const validar = (e) => {
    e.preventDefault();

    if (e.target.value =="root") {
      setError(false)
      setMensaje("UserName Valide")
      
      return 
    }
    setError(true)
    
  };

  const onLogin = e => {
		e.preventDefault();

		navigate('/aguaId', {
			replace: true,
			state: {
				logged: true,
				
			},
		});

		
	};

  const validar1 = (e) => {
    e.preventDefault();

    if (email =="sygnux@gmail.com" && pass=="1234") {
      setError(false)
      setLlave(true)
      onLogin(e)
      
      

       return
    }
    alert(" error ");
    
    
  };

 

  return (
    <div className="login" >

      
      {/*Formulario login*/}
      <Card
        className="cardLogin mx-auto max-w-sm space-y-3 mt-16 "
        decoration="right"
        decorationColor="green"
        
      >
        <img src="/public/veolia.jpg" className="h-24 w-24 mx-28"></img>
        <form
          onSubmit={validar}
          className="mx-auto max-w-sm space-y-8 "
        >
          <div>
            <TextInput
              error={false}
              errorMessage={mensaje}
              
              value={user}
              onChange={onChangeUser}
              onSubmit={validar}
              placeholder="Username"
              
            />
          </div>
          <div>
            <TextInput
              error={error}
              errorMessage={mensaje}
              disabled={error}
              value={email}
              onChange={onChangeMail}
              placeholder="Correo electronico"
            />
          </div>
          <div>
            <TextInput
              error={error}
              placeholder="password"
              type="password"
              disabled={error}
              onChange={onChangePass}
              value={pass}
            />
          </div>
        </form>
        <div>
          
        
      
        </div>
        
         <button className="bg-gray-200 hover:bg-blue-700 text-zinc-500 font-bold py-2 px-4 rounded mx-28" onClick={validar1}>
               Ingreso
          </button>
                        
      
      </Card>
      
                
            
      
  
 
    </div>
  );
};
export default LoginPage;
