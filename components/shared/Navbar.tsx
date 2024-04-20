import React from 'react'
import { Button } from '../ui/button'


type NavbarProps = {
    location: 'auth' | 'main' | 'profile'
}


const Navbar = ({location}: NavbarProps) => {
  return (
    <div>
        <nav className='flex justify-evenly items-center h-12 bg-primary text-primary-foreground'>
            <div >
                Usquito
            </div>
            <div className='w-2/5'>
            <ul className='flex justify-center gap-10'>
                <li>Nosotros</li>
                <li>La usco </li>
                <li>Contacto</li>
            </ul>
            </div>
            <div className='gap-4 flex'>
            <Button variant={'secondary'}>Registrate</Button>
            <Button variant={'secondary'}>Iniciar sesion</Button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar