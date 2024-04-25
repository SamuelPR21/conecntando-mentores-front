import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'



const DashboardPage = () => {
  return (
    <div className='grid grid-cols-3 gap-4 my-7 w-4/5 mx-auto'>
        <aside className='col-span-1 border-r-2 border-gray-500 p-4 min-h-full'>
            <header className='flex items-center  gap-4'>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>
                        G
                    </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <span className="text-lg md:text-2xl font-bold">Gabs</span>
                    <span className="text-sm">3 semestre</span>
                </div>
            </header>

            <div className='mt-8'>
                <ul>
                    <li>Trabajos guardados</li>
                    <li>Trabajos subidos</li>
                    <li>Subir nuevo trabajo</li>
                </ul>
            </div>

            <div>
                <button className='bg-primary text-white px-4 py-2 rounded-md mt-4'>Cerrar sesión</button>
            </div>
        </aside>
        
        <main className='col-span-2 gap-8 p-4'>
            <div className='grid grid-cols-2 gap-8'>
                <Card>
                    <CardHeader>
                        <CardTitle>Trabajos guardados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <p>Trabajos guardados</p>
                        </CardDescription>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>Trabajos guardados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <p>Trabajos guardados</p>
                        </CardDescription>
                    </CardContent>
                </Card>
                

            </div>
            <div className='grid grid-cols-1 gap-8'>
                <Card>
                    <CardHeader>
                        <CardTitle>Trabajos guardados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <p>Trabajos guardados</p>
                        </CardDescription>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle>Trabajos guardados</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <p>Trabajos guardados</p>
                        </CardDescription>
                    </CardContent>
                </Card>
                

            </div>

        </main>
    </div>
  )
}

export default DashboardPage