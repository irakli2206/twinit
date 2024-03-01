import React, { useState } from 'react'
import { ListCountryT } from '../types/general'
import { LightButton, LinkButton } from './Elements'
import { Link, useNavigate } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

type Props = ListCountryT

const CountryListItem = ({ flag, name, population }: Props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    const wikipediaEndpoint = 'https://en.wikipedia.org/wiki/' + name.common


    return (
        <>
            {isLoading && <CountryListItemSkeleton />}
            <motion.li className={classNames("flex w-full justify-between gap-x-6 py-5", {
                'hidden': isLoading
            })}
                initial={{
                    opacity: 0,
                    x: -10
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.2,
                        bounce: 0
                    }
                }}
                viewport={{
                    amount: "all",
                    once: true,
                }}
            >
                <div className="flex flex-col sm:flex-row min-w-0 gap-x-4">
                    <div className='h-12 w-12 relative'>
                        <img className="h-12 w-12 flex-none  object-contain" src={flag.url} alt={flag.alt}
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>

                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{name.common}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Population: {population.toLocaleString()}</p>
                    </div>
                </div>
                <div className="  flex flex-col items-end justify-center min-[400px]:flex-row min-[400px]:items-center  gap-1">
                    <LightButton size='sm' onClick={() => navigate(name.common.toLowerCase())}>View Details</LightButton>
                    <LinkButton href={wikipediaEndpoint} target="_blank" size='sm' withArrow={true} variant='info'>Wiki</LinkButton>
                </div>
            </motion.li>
        </>
    )
}

const CountryListItemSkeleton = () => {

    return (
        <div className="p-4  w-full mx-auto ">
            <div className="animate-pulse flex space-x-4 items-center">
                <div className="  bg-slate-200 h-12 w-12"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryListItem