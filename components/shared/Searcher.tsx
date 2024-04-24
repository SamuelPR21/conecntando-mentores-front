import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Searcher = () => {
  return (
    <>
        <form action="" className=' flex items-center justify-evenly md:gap-2 w-full '>
            <Input className='md:w-4/5 w-full' placeholder='Buscar trabajo' />
            <Button className="hidden md:block" type='submit'>Buscar</Button>
        </form>
        
    </>
  )
}

export default Searcher