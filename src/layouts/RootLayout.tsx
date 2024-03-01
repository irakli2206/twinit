import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { LoadingOverlay } from '../components/Elements'

const RootLayout = () => {
    return (
        <main className='min-h-screen h-screen w-full mx-auto '>
            <Suspense fallback={<LoadingOverlay />}  >

                <div className="wrapper  h-full w-full relative">

                    <Breadcrumbs />

                    <Outlet />

                </div>
            </Suspense>
        </main>

    )
}

export default RootLayout