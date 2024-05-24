import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardTabs from '@/components/shared/DashboardTabs'
import { getUserById } from '@/services/backend/users'
import { cookies } from "next/headers"



const DashboardPage = async () => {
    const cookiesStore = cookies();
    const token = cookiesStore.get('token')?.value || ''; // Provide a default value for token
    console.log('Token en pagina de trabajos', token)

    const user_id = cookiesStore.get('user')?.value || ''; // Provide a default value for user_id
    console.log('Id del suario', user_id)
    const user = await getUserById(user_id , token);
    console.log('Objeto de usuario', user)
    const firstLetter = user.user_name.charAt(0);

  return (
    <div className='gap-4 my-7 w-[90%] mx-auto'>
       
            <header className='flex items-center px-4 gap-8 '>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>
                        {firstLetter}
                    </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <span className="text-2xl md:text-2xl font-bold">
                        {user.username}
                    </span>
                    <span className="text-sm">{user.user_name} {" "}  {user.user_apellido}</span>
                </div>
            </header>

           

        
        <main className='col-span-2 gap-8 p-0 mt-6'>
            <DashboardTabs />

        </main>
    </div>
  )
}

export default DashboardPage