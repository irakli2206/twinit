import React from 'react'
import { Outlet } from 'react-router-dom'

const CountryLayout = () => {
    return (
        <main className='  max-w-screen-lg mx-auto'>

                <div className="wrapper p-2 sm:p-8 h-full w-full relative">

                    <Outlet />

                </div>
        </main>
    )
}

export default CountryLayout