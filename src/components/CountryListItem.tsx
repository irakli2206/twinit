import React from 'react'
import { ListCountryT } from '../types/general'
import { LightButton } from './Elements'
import { useNavigate } from 'react-router-dom'

type Props = ListCountryT

const CountryListItem = ({ flag, name, population }: Props) => {
    const navigate = useNavigate()

    return (
        <li className="flex w-full justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none  object-contain" src={flag.url} alt={flag.alt} />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Population: {population.toLocaleString()}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end justify-center">
                <LightButton size='sm' onClick={() => navigate(name.toLowerCase())}>View Details</LightButton>
            </div>
        </li>
    )
}

export default CountryListItem