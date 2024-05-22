import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Searcher from '@/components/shared/Searcher'

import Trabajos from '@/components/shared/Trabajos'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import Filters from '@/components/shared/Filters'

const TrabajosPage = () => {
  return (
    <div>
        <div className='absolute right-24 hidden md:block'>
            <Link href="/dashboard">
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>
                            G
                        </AvatarFallback>
                    </Avatar>
            </Link>    
        </div>
        <div className='flex justify-between items-center md:hidden mb-3'>
            <h1 className='text-muted-foreground'>Gabs: Semestre 3 </h1>
            <div className='flex gap-2 items-center'>
                
                <Link href="/dashboard">
                    <Avatar>
                        <AvatarImage />
                        <AvatarFallback>
                            G
                        </AvatarFallback>
                    </Avatar>
                </Link>
            </div>
            
        </div>
        <header>
            <div className="flex items-center justify-around gap-3 ">
                <Searcher />
            </div>
        </header>
        
        <main>
            <div className='grid gap-6 mt-6'>
                <Trabajos />
            </div>
            
        </main>

    </div>
  )
}

export default TrabajosPage