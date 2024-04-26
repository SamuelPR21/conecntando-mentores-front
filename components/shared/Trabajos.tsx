import React from 'react'
import { trabajosData } from '@/lib/data'

import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Trabajos = async () => {


return (
    <div className='grid grid-flow-row gap-3'>
        {trabajosData.map(trabajo => (
            <Card 
                className='border bg-transparent'
                key={trabajo.id}>
                <CardHeader>
                    <CardTitle
                        className='text-xl lg:text-2xl'
                    >Trabajo: {trabajo.name}</CardTitle>
                </CardHeader>
                <CardContent className='flex justify-between'>
                    <div>
                        <CardDescription>Materia: {trabajo.materia}</CardDescription>
                        <CardDescription>Hecho por: {trabajo.autor}</CardDescription>
                        <CardDescription className='text-xs'>Fecha de entrega: {trabajo.fecha}</CardDescription>
                    </div>
                    
                    <Link href={`/trabajos/${trabajo.id}`} className='justify-end'>Ver trabajo</Link>
                </CardContent>
            </Card>
        ))}
    </div>
)
}

export default Trabajos