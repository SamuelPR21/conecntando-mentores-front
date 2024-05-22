import React from 'react';

import AuthForm from "@/components/shared/AuthForm"
import Link from "next/link";

const Login = () => {
    
  return (

        
        <>
            
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-primary-foreground font-bold mb-10 text-center">Login</h2>
            <p className="text-center text-white">Entra a tu mundo de ayuda para las</p>
            <p className="text-center text-white">tareas de la universidad</p>

            
            {/**Formulario*/}
            <AuthForm type='login' />
            
            
            <div className="text-center mt-5">
              {/* <p className='my-5'>
                <Link href="/forgot-password">
                  ¿Olvidaste tu contraseña?
                </Link>
              </p> */}
              <p>
                ¿No tienes cuenta?{" "}
                <Link href="/register" className='underline'>
                  Registrate
                </Link>
              </p>
              
            </div>
            
        </>
    
  );
}

export default Login;