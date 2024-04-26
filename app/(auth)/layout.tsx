import React from 'react'
// import Image from 'next/image'
import Navbar from '@/components/shared/Navbar'
import { Card } from '@/components/ui/card'
import Footer from '@/components/shared/Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
            <div className="h-screen w-screen bg-backgound md:bg-cover">
            <Navbar 
                location='auth'
            />
          
            <div className='flex flex-col justify-center items-center mx-auto w-4/5 md:w-3/5 2xl:w-1/2 min-h-screen '>
                {/* Logo */}
                {/* <Image className="xl:mb-20 mb-6 " alt='kairos' src="/kairos-login.svg" width={250} height={150}></Image> */}
                <Card className='p-10 mb-20'>
                    {children}
                </Card>
            </div>
        </div>
        <Footer />
    </>

  )
}

export default Layout