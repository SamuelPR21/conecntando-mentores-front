import React from 'react'
import { trabajosData } from '@/lib/data'
import { Button } from '@/components/ui/button'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Trabajos = () => {
return (
    <div className='grid grid-flow-row gap-3'>
        {trabajosData.map(trabajo => (
            <Card 
                className='border bg-transparent'
                key={trabajo.id}>
                <CardHeader>
                    <CardTitle>Trabajo: {trabajo.name}</CardTitle>
                </CardHeader>
                <CardContent className='flex justify-between'>
                    <div>
                        <CardDescription>Materia: {trabajo.materia}</CardDescription>
                        <CardDescription>Hecho por: {trabajo.autor}</CardDescription>
                        <CardDescription className='text-xs'>Fecha de entrega: {trabajo.fecha}</CardDescription>
                    </div>
                    
                    <Button className='justify-end' variant={'secondary'}>Ver trabajo</Button>
                </CardContent>
            </Card>
        ))}
    </div>
)
}

export default Trabajos