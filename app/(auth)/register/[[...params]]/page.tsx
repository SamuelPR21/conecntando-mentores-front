import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import Link from 'next/link';
import AuthForm from '@/components/shared/AuthForm';
interface RegisterProps {
    searchParams?: {
        role?: string
    }
}

const Register = ({searchParams}: RegisterProps) => {
    
    const role = searchParams?.role;
  return (
        <>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-3 text-center">
                Registro
                {role === 'admin' && <p> de admin</p>}
            </h2>

            {role !== 'admin' ?
                <>
                    <p className="text-center text-white">Registro de un nuevo usuario</p>
                    <AuthForm 
                        type='register'
                    />
                </>
            : 
                <AuthForm
                    type='register-admin'
                />
            }
            

            <div className="text-center mt-5">
                <p>
                    ¿Ya tienes cuenta
                    {role === 'admin' ? 
                        <span> {" "}de admin</span>
                    : null}
                    ?
                    {" "}
                    <Link href={{pathname: '/login', query: {role: role === 'admin' ? 'admin': 'user'}}} className='underline'>
                        Inicia sesion
                    </Link>
                </p>
                
            </div>
        </>
    
  );
}

export default Register;