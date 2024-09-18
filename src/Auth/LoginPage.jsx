//import React from 'react'
//import { RiSearchLine } from '@remixicon/react';
import { TextInput } from '@tremor/react';
import { Card } from '@tremor/react';
//import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className="">
      <Card className="mx-auto max-w-sm space-y-8"
      decoration="top"
      decorationColor="indigo">
      
      <div>
        
      </div>
      <div>
        <TextInput error={true} errorMessage="Wrong username" />
      </div>
      <div>
        <TextInput placeholder="Disabled" disabled={true} />
      </div>
      <div>
        <TextInput placeholder="Type password here" type="password" />
      </div>
      

    </Card>
      
      
    </div>

    
  );
}
export default LoginPage