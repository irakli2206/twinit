import React, { ChangeEvent, Suspense, useEffect, useMemo, useState } from 'react'
import { Await, useLoaderData, useParams, useSearchParams } from 'react-router-dom'
import CountryListItem from '../components/countries/CountryListItem'
import { ContinentOptionT, ListCountryT } from '../types/general'
import ReactSelect from 'react-select'
import { Dropdown, Input, LoadingOverlay, Spinner } from '../components/Elements'
import { CountryListError } from '../components/Error'
import { api } from '../main'
import axios from 'axios'
import { defaultContinentOptions } from '../data'



const CountryList = () => {
    const loaderData = useLoaderData() as any

    const [countryFilter, setCountryFilter] = useState("")
    const [continentFilter, setContinentFilter] = useState<string>("All")


    const filteredData = useMemo(() => {
        let filteredCountries: ListCountryT[] = []
        filteredCountries = [...loaderData].filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()) && (country.region.includes(continentFilter) || continentFilter === "All"))

        return filteredCountries
    }, [countryFilter, continentFilter])

    const handleContinentChange = (value: string) => {
        setContinentFilter(value)
    }

    //Would use debouncing in real app
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountryFilter(e.target.value)
    }


    return (
        <>
            <div className="flex gap-2 max-w-screen-sm mx-auto mb-4">
                <Input label='Name' value={countryFilter || ""} onChange={handleSearchChange} />
                <Dropdown label="Region" value={continentFilter} onChange={handleContinentChange} />
            </div>

            <>
                <div className='h-full w-full flex items-center justify-center'>
                    <ul className="flex flex-col max-w-screen-sm divide-y divide-gray-200  w-full">
                        {filteredData.map((country: any) => {

                            return (
                                <CountryListItem key={country.name.common} name={country.name} population={country.population} flag={{ alt: country.flags.alt, url: country.flags.svg }} />
                            )
                        })}
                    </ul>
                </div>
            </>



        </>
    )
}

export default CountryList