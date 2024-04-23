import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className={` bg-black text-white md:px-8 md:py-4 p-2 `}>
            <div className="container mx-auto text-sm">
                <div className="flex flex-col md:flex-row justify-between  ">
                    <div className="mb-4 md:mb-0">
                        <h2 className="font-bold text-lg">La usquito ayuda!</h2>
                        <p>&copy;Samuel Perdomo</p>
                    </div>
                    <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-4 ">
                        <div>
                            <h3 className="font-bold">Análisis</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Servicios</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Nosotros</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Contacto</h3>
                            <ul>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer