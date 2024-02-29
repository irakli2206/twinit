import React from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { CountryDetailsT } from '../types/general'
import { CountryDetailsError } from '../components/Error'
 

const CountryDetails = () => {
  const loaderData = useLoaderData() as any

  return (
    <>
      <Await
        resolve={loaderData.countryDetails}
        errorElement={
          <CountryDetailsError />
        }
      >
        {(data) => {
          let countryDetailsData = data.data[0]
          return (
            <div className='w-full'>
              <div className="px-4 sm:px-0 flex items-center justify-between ">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{countryDetailsData.name.common}</h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Detailed information view of {countryDetailsData.name.common}.</p>
                </div>
                <img src={countryDetailsData.flags.svg} alt={countryDetailsData.flags.alt} className="h-10" />
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Official name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{countryDetailsData.name.official}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Capital</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{countryDetailsData.capital.join(', ')}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Population</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{countryDetailsData.population.toLocaleString()}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Region</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{countryDetailsData.region}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Language</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {Object.entries(countryDetailsData.languages).map((cur: any) => cur[1]).join(", ")}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Currency</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {Object.entries(countryDetailsData.currencies).map((cur: any) => `${cur[1].name} (${cur[1].symbol || "No currency symbol"})`).join(", ")}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          )
        }}

      </Await>
    </>
  )
}

export default CountryDetails