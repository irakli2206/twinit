import React, { ChangeEvent, Suspense, useEffect, useMemo, useState } from 'react'
import { Await, useLoaderData, useParams, useSearchParams } from 'react-router-dom'
import CountryListItem from '../components/countries/CountryListItem'
import { ContinentOptionT, ListCountryT } from '../types/general'
import { Dropdown, Input, LoadingOverlay, Spinner } from '../components/Elements'
import { CountryListError } from '../components/Error'
import { api } from '../main'
import axios from 'axios'
import { defaultContinentOptions } from '../data'
import SearchFilters from '../components/countries/SearchFilters'
import CountryList from '../components/countries/CountryList'



const CountryListPage = () => {
    const loaderData = useLoaderData() as any

    const [countryFilter, setCountryFilter] = useState<string>("")
    const [continentFilter, setContinentFilter] = useState<string>("All")


    const filteredData = useMemo(() => {
        return loaderData.filter((country: ListCountryT) => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()) && (country.region.includes(continentFilter) || continentFilter === "All"))
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
            <SearchFilters countryFilter={countryFilter} continentFilter={continentFilter} handleContinentChange={handleContinentChange} handleSearchChange={handleSearchChange} />
            <CountryList filteredData={filteredData} />
        </>
    )
}



export default CountryListPage