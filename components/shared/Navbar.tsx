import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import LogoutButton from './LogoutButton'



type NavbarProps = {
    location: 'auth' | 'main' | 'profile' | 'admin'
}


const Navbar = ({location}: NavbarProps) => {



return (
    <div>
        <nav className='flex justify-evenly items-center h-12 bg-primary text-primary-foreground'>
            <div className='font-bold'>
                <Link href='/'>CM</Link>
            </div>
            <div className='w-2/5 hidden md:block'>
                <ul className='flex justify-center gap-10'>
                    
                    <li>
                        <Link href="/">La usco</Link>
                    </li>
                    <li>
                        <Link href="/">Contacto</Link>
                    </li>
                </ul>
            </div>
            {/* {location === 'auth' ? (
                <div>
                    Bienvenido a Conectando mentores...
                </div>
            ) :*/} {location === 'profile'  ? ( 
                <div className='gap-4 items-center flex ml-32'>
                    <p></p>
                </div>
            ) : location === 'admin' ? (
                <div className='gap-4 items-center flex ml-32'>
                    <LogoutButton />
                    <p>Admin</p>
                </div>
            ):(
                <div className='gap-4 flex ml-32 text-xs items-center'>
                    <Button size={'sm'} variant={'outline'} >
                        <Link href={{pathname: '/register', query: {role: 'user'}}}>Registrarse</Link>
                    </Button>
                    <Button variant={'outline'} size={'sm'} >
                        <Link  href={{pathname: '/login', query: {role: 'user'}}}>Iniciar sesion</Link>
                    </Button>
                    {/* <Link  href={{pathname: '/login', query: {role: 'admin'}}}>Entrar como admin</Link> */}
                    
                </div>
            )}
            {
                (location === 'profile') && (
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
                                        {location === 'profile' && (
                                            <>
                                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                                    <Link href='/dashboard'>Perfil</Link>
                                                </li>
                                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                                    <Link href='/trabajos'>Buscar Trabajos</Link>
                                                </li>
                                            </>
                                        )}
                                         {/* {location === 'admin' && (
                                            <>
                                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                                    <Link href='/imadmin/profile'>Perfil</Link>
                                                </li>
                                                <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                                    <Link href='/imadmin'>Lista de datos</Link>
                                                </li>
                                            </>
                                        )} */}
                                       
                                        {/* <li className='hover:bg-card p-3 rounded-full cursor-pointer'>
                                            <Link href='/profile/trabajos/nuevo'>Nosotros</Link>
                                        </li> */}
                                        <li className='block md:hidden hover:bg-card p-3 rounded-full cursor-pointer'>
                                            <Link target='_blank' href='https://usco.edu.co/es/'>La usco</Link>
                                        </li>
                                        {/* <li className='block md:hidden hover:bg-card p-3 rounded-full cursor-pointer'>
                                            <Link href='mailto:u20231211209@usco.edu.co'>Contacto</Link>
                                        </li> */}
                                    </ul>
                            </div>
                                <SheetFooter>
                                    <LogoutButton />
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