'use client';
import React, { use } from 'react'

import { deleteCookies } from '@/utils/cookies'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const router = useRouter();

    const submitLogout = async () => {
        const a  = await deleteCookies();
            if(a){
                router.push('/')
            }
    }

  return (
    
        <Button variant={'outline'} onClick={submitLogout}>
            Cerrar sesion
        </Button>
    
  )
}

export default LogoutButton