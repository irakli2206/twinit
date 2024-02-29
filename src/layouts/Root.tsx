import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { LoadingOverlay } from '../components/Elements'

const Root = () => {
    return (
        <main className='min-h-screen max-w-screen-lg mx-auto'>
            <Suspense fallback={<LoadingOverlay />} >
                <div className="px-2 pt-2 sm:pt-8 sm:px-8">
                    <Breadcrumbs />
                </div>
                <div className="wrapper p-2 sm:p-8 h-full w-full relative">

                    <Outlet />

                </div>
            </Suspense>
        </main>

    )
}

export default Root