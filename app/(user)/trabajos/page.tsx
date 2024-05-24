import React from 'react'


import { cookies } from "next/headers"

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Searcher from '@/components/shared/Searcher'

import Trabajos from '@/components/shared/Trabajos'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { getUserById } from '@/services/backend/users'





const TrabajosPage = async () => {
    const cookiesStore = cookies();
    const token = cookiesStore.get('token')?.value || ''; // Provide a default value for token
    console.log('Token en pagina de trabajos', token)

    const user_id = cookiesStore.get('user')?.value || ''; // Provide a default value for user_id
    console.log('Id del suario', user_id)
    const user = await getUserById(user_id , token);
    console.log('Objeto de usuario', user)

    const firstLetter = user.user_name.charAt(0);
    

  return (
    <div>
        <div className='absolute right-24 hidden md:block'>
            <Link href="/dashboard">
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>
                           {firstLetter}
                        </AvatarFallback>
                    </Avatar>
            </Link>    
        </div>
        <div className='flex justify-between items-center md:hidden mb-3'>
            <h1 className='text-muted-foreground'>{user.user_name} {" "}  {user.user_apellido}</h1>
            <div className='flex gap-2 items-center'>
                
                <Link href="/dashboard">
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>
                            {firstLetter}
                        </AvatarFallback>
                    </Avatar>
                </Link>
            </div>
            
        </div>
        {/* <header>
            <div className="flex items-center justify-around gap-3 ">
                <Searcher />
            </div>
        </header> */}
        
        <main>
            <div className='grid gap-6 mt-6'>
                <div>
                    <h1 className='lg:text-4xl font-bold'>Lista de todos los trabajos:</h1>
                </div>
                <Trabajos />
            </div>
            
        </main>

    </div>
  )
}

export default TrabajosPage