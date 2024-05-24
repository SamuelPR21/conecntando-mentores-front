import React from 'react';

import AuthForm from "@/components/shared/AuthForm"
import Link from "next/link";

interface LoginProps {
    searchParams?: {
        role?: string
    }
}


const Login = ({searchParams}: LoginProps) => {
    const role = searchParams?.role;
    
  return (

        
        <>
            
            <h2 className="text-3xl md:text-4xl xl:text-5xl text-primary-foreground font-bold mb-10 text-center">
                Login
                {role === 'admin' && <p> de admin</p>}
            </h2>
            

            
            {role !== 'admin' ?
                <>
                    <p className="text-center text-white">Entra a tu mundo de ayuda para las</p>
                    <p className="text-center text-white">tareas de la universidad</p>
                    <AuthForm 
                        type='login'
                    />
                </>
            : 
                <AuthForm
                    type='login-admin'
                />
            }
            
            
            <div className="text-center mt-5">
              {/* <p className='my-5'>
                <Link href="/forgot-password">
                  ¿Olvidaste tu contraseña?
                </Link>
              </p> */}
              {role !== 'admin' ? (
                  <p>
                  ¿No tienes cuenta?{" "}
                  <Link href={{pathname: '/register', query: {role: 'user'}}} className='underline'>
                    Registrate
                  </Link>
                </p>
              ): 
                <p>
                  No soy admin. {" "}
                  <Link href={{pathname: '/register', query: {role: 'user'}}} className='underline'>
                    Registrate como usuario
                  </Link>
                </p>
              }
              
              
            </div>
            
        </>
    
  );
}

export default Login;