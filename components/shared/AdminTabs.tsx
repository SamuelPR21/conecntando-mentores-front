import React from 'react'
import Trabajos from './Trabajos'
import UsersList from './UsersList'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { Button } from '../ui/button'
import AddTrabajo from './AddTrabajo'


const AdminTabs = () => {
  return (
    <div>
        <Tabs defaultValue="users" className="">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="users">Lista de usuarios</TabsTrigger>
        <TabsTrigger value="trabajos">Lista de trabajos</TabsTrigger>
        <TabsTrigger value="upload">Mis trabajos</TabsTrigger>
      </TabsList> 
      <TabsContent value="users">
      <header className='flex justify-between items-center'>
        <h1
         className='text-2xl font-bold my-4  pl-1'
        >
          Lista de usuarios
        </h1>
        {/* <Link
          href='/trabajos'>
            <Button
            variant={'outline'}
            className='bg-transparent '
            >Buscar +</Button>
        </Link> */}
          
        </header>
        <UsersList />
      </TabsContent> 
      <TabsContent value="trabajos">
       
        <header className='flex justify-between items-center'>
          <h1
          className='text-2xl font-bold my-4  pl-1'
          >
            Lista de trabajos
          </h1>
            
          </header>
          <Trabajos />
      </TabsContent>
      <TabsContent value="upload">
       
        <header className='flex justify-between items-center'>
          <h1
          className='text-2xl font-bold my-4  pl-1'
          >
            Lista de mis trabajos
          </h1>
          <AddTrabajo />
            
          </header>
          <Trabajos />
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default AdminTabs