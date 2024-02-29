import React, { ChangeEvent, useEffect, useState } from 'react'
import { Await, useLoaderData, useParams, useSearchParams } from 'react-router-dom'
import CountryListItem from '../components/CountryListItem'
import { ListCountryT } from '../types/general'
import ReactSelect from 'react-select'
import { Dropdown, Input } from '../components/Elements'
import { CountryListError } from '../components/Error'

const CountryList = () => {
    let loaderData = useLoaderData() as any
    const [countriesData, setCountriesData] = useState<ListCountryT[] | null>(null)

    const [countryFilter, setCountryFilter] = useState("")
    const [continentFilter, setContinentFilter] = useState<string | null>(null)

    const handleContinentChange = (value: string) => {
        setContinentFilter(value)
    }

    //Would use debouncing in real app
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountryFilter(e.target.value)
    }

    useEffect(() => {

    }, [countryFilter, continentFilter])

    return (
        <>
            <div className="flex gap-2 max-w-screen-sm mx-auto mb-4">
                <Input label='Search' value={countryFilter || ""} onChange={handleSearchChange} />
                <Dropdown value={continentFilter} onChange={handleContinentChange} />
            </div>
            <Await
                resolve={loaderData.countryList}
                errorElement={
                    <CountryListError />
                }
            >
                {(data) => {
                    let countryListData = data.data
                    setCountriesData(countryListData)
                    return (
                        <>
                            <div className='h-full w-full flex items-center justify-center'>
                                <ul className="flex flex-col max-w-screen-sm divide-y divide-gray-200 px-4 w-full">

                                    {countriesData!.map((country: any) => {

                                        return (
                                            <CountryListItem key={country.name.common} name={country.name.common} population={country.population} flag={{ alt: country.flags.alt, url: country.flags.svg }} />
                                        )
                                    })}
                                </ul>
                            </div>
                        </>
                    )
                }}

            </Await>
        </>
    )
}

export default CountryList