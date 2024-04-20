import React from 'react'

import Navbar from '@/components/shared/Navbar';


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    
      <main className='root'>
            <Navbar 
                location='main'
            />
          <div className="root-container overflow-hidden">
                    {children} 
          </div>
      </main>
    
  )
}

export default Layout