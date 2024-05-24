import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import { trabajosData } from '@/lib/data'

interface TrabajoContentProps {
  params: {
    id?: string;
  }
}

const TrabajoContent = ({params}: TrabajoContentProps) => {
    const {id} = params;
    console.log(id);

    const trabajo = trabajosData.find(trabajo => trabajo.id === id);

    trabajosData.find
    return (
        <div className="p-4 flex flex-col  gap-2 md:gap-4 text-foreground">
          <h1 className=" text-4xl md:text-6xl font-bold mb-2">
            {trabajo?.name}
          </h1>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
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
            </div>
            
          </div>
         
         <div className="shadow-lg mt-4 md:mt-0 rounded-md">
          <p className="text-base p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar sicce
              condimentum.
          </p>
            {/* <Image
                className='mx-auto rounded-md my-4'
                src="/noticias2.jfif"
                alt="imagen"
                width={500}
                height={500}
            ></Image> */}

          <p className="text-base p-2">
          {trabajo?.contenido.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                <br />
            </span>
          ))}
          </p>
         </div>
          
        </div>
      )
}

export default TrabajoContent