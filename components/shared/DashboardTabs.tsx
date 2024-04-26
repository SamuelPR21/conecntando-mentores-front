import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
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
        <h1
            className='text-2xl font-bold my-4  pl-1'
        >Trabajos guardados </h1>
        <Trabajos />
      </TabsContent>
      <TabsContent value="made">
        <h1
         className='text-2xl font-bold my-4  pl-1'
        >Trabajos Realizados</h1>
        <Trabajos />
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default DashboardTabs