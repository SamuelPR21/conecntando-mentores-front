import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import Link from 'next/link';
import AuthForm from '@/components/shared/AuthForm';

const Register = () => {
  return (

        <>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-3 text-center">Registro</h2>
            <p className="text-center text-white">Registro de un nuevo usuario</p>

            <AuthForm
                type='register'
            />

            <div className="text-center mt-5">
              <p>
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className='underline'>
                  Inicia sesion
                </Link>
              </p>
              
            </div>
        </>
    
  );
}

export default Register;