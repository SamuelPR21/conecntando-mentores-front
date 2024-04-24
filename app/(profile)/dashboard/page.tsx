import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <header>
            <h1>Bienvenido, Gabs! </h1>
            <p>3 semestre</p>
        </header>
        
        <main>
            <div className='grid grid-cols-2 gap-8'>
                <section>
                    <h1>Tus aportes:</h1>
                </section>
                <section>
                    <h1>Tus descargas:</h1>
                </section>
            </div>
        </main>
        
        
    </div>
  )
}

export default DashboardPage