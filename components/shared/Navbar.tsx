import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'



type NavbarProps = {
    location: 'auth' | 'main' | 'profile'
}


const Navbar = ({location}: NavbarProps) => {
return (
    <div>
        <nav className='flex justify-evenly items-center h-12 bg-primary text-primary-foreground'>
            <div className='font-bold'>
                <Link href='/'>Usquito</Link>
            </div>
            <div className='w-2/5 hidden md:block'>
                <ul className='flex justify-center gap-10'>
                    <li>
                        <Link href="/">Nosotros</Link>
                    </li>
                    <li>
                        <Link href="/">La usco</Link>
                    </li>
                    <li>
                        <Link href="/">Contacto</Link>
                    </li>
                </ul>
            </div>
            {location === 'auth' ? (
                <div></div>
            ) : location === 'profile' ? (
                <div className='gap-4 items-center flex ml-32'>
                    <p>Gabs</p>
                    <Button variant={'outline'} size={'sm'}>Cerrar Sesión</Button>
                </div>
            ) : (
                <div className='gap-4 flex ml-32'>
                    <Button variant={'outline'}>
                        <Link href='/register'>Registrarse</Link>
                    </Button>
                    <Button variant={'outline'}>
                        <Link href='/login'>Iniciar sesion</Link>
                    </Button>
                </div>
            )}

        </nav>
    </div>
);
}

export default Navbar