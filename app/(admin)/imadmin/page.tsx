import React from 'react'
import AdminTabs from '@/components/shared/AdminTabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


const AdminPage = () => {
  return (
    
      <div className='gap-4 my-7 w-[90%] mx-auto'>
       
       <header className='flex items-center px-4 gap-8 '>
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>
                        A
                    </AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <span className="text-2xl md:text-2xl font-bold">Admin</span>
                    <span className="text-xl">Usuario administrador</span>
                </div>
            </header>

      

   
          <main className='col-span-2 gap-8 p-0 mt-6'>
              <AdminTabs />
          </main>
        </div>

  )
}

export default AdminPage;