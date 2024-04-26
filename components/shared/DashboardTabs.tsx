import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button } from '../ui/button'
import Trabajos from './Trabajos'

const DashboardTabs = () => {
  return (
    <div>
        <Tabs defaultValue="saved" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="saved">Trabajos Guardados</TabsTrigger>
        <TabsTrigger value="made">Trabajos realizados</TabsTrigger>
      </TabsList>
      <TabsContent value="saved">
      <header className='flex justify-between items-center'>
        <h1
         className='text-2xl font-bold my-4  pl-1'
        >
          Trabajos guardados
        </h1>
          <Button
            variant={'outline'}
            className='bg-transparent '
          >Buscar +</Button>
        </header>
        <Trabajos />
      </TabsContent>
      <TabsContent value="made">
       
        <header className='flex justify-between items-center'>
        <h1
         className='text-2xl font-bold my-4  pl-1'
        >
          Trabajos Realizados
        </h1>
          <Button
            variant={'outline'}
            className='hidden bg-transparent md:block'
          >Crear nuevo trabajo</Button>
          <Button
            variant={'outline'}
            className='block md:hidden bg-transparent'
          >
            +
          </Button>
        </header>
        <Trabajos />
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default DashboardTabs