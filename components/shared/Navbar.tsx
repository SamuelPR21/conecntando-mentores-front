import React from 'react'
import { Button } from '../ui/button'


type NavbarProps = {
    location: 'auth' | 'main' | 'profile'
}


const Navbar = ({location}: NavbarProps) => {
  return (
    <div>
        <nav className='flex justify-evenly items-center h-12 bg-primary text-primary-foreground'>
            <div className='font-bold'>
                Usquito
            </div>
            <div className='w-2/5'>
            <ul className='flex justify-center gap-10'>
                <li>Nosotros</li>
                <li>La usco </li>
                <li>Contacto</li>
            </ul>
            </div>
            <div className='gap-4 flex ml-32'>
                <Button variant={'outline'}>Registrate</Button>
                <Button variant={'outline'}>Iniciar sesion</Button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar