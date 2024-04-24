import React from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
          <div className=" overflow-hidden w-full p-3  md:w-[70%] mx-auto md:mt-9 ">
                    {children} 
          </div>
  )
}

export default Layout