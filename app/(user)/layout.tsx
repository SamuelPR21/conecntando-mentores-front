import React from 'react'

import Navbar from '@/components/shared/Navbar';


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    
      <main className='root'>
            <Navbar 
                location='profile'
            />
          <div className="root-container overflow-hidden mb-6">
                {children} 
          </div>
      </main>
    
  )
}

export default Layout