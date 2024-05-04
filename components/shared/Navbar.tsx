import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'



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
                <div>
                    Bienvenido a Usquito...
                </div>
            ) : location === 'profile' ? (
                <div className='gap-4 items-center flex ml-32'>
                    <p>Gabs</p>
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
            {
                location === 'profile' && (
                    <Sheet>
                <SheetTrigger>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  
                </SheetTrigger>

                <SheetContent className='w-64 flex flex-col justify-between' >
                    <div>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        
                            <ul className=' mt-4 flex flex-col'>
                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                    <Link href='/dashboard'>Perfil</Link>
                                </li>
                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                    <Link href='/trabajos'>Buscar Trabajos</Link>
                                </li>
                                {/* <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                    <Link href='/profile/trabajos/nuevo'>Nosotros</Link>
                                </li> */}
                                <li className='block md:hidden hover:bg-card p-3 rounded-full cursor-pointer'>
                                    <Link target='_blank' href='https://usco.edu.co/es/'>La usco</Link>
                                </li>
                                <li className='block md:hidden hover:bg-card p-3 rounded-full cursor-pointer'>
                                    <Link href='mailto:u20231211209@usco.edu.co'>Contacto</Link>
                                </li>
                            </ul>
                    </div>
                        <SheetFooter>
                            <Button variant={'outline'}>
                                <Link href='/'>Cerrar sesion</Link>
                            </Button>
                        </SheetFooter>
                </SheetContent>
                

              </Sheet>
                ) 
            }

        </nav>
    </div>
);
}

export default Navbar