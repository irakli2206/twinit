import React from 'react'
import { ListCountryT } from '../../types/general'
import CountryListItem from './CountryListItem'

type Props = {
    filteredData: ListCountryT[]
}

const CountryList = ({filteredData}: Props) => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <ul className="flex flex-col max-w-screen-sm divide-y divide-gray-200  w-full">
                {filteredData.map((country: ListCountryT) => {

                    return (
                        <CountryListItem key={country.name.common} {...country} />
                    )
                })}
                {filteredData.length === 0 && <h1 className='text-center'>No results</h1>}
            </ul>
        </div>
    )
}

export default CountryList