import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, LoaderFunctionArgs, RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import Root from './layouts/Root'
import axios from 'axios'
import CountryLayout from './layouts/CountryLayout'


export const api = import.meta.env.VITE_API


const countryDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  //fullText=true otherwise path /eri will return Nigeria, instead we want an error
  const countryDetailsEndpoint = api + '/v3.1/name/' + params.country + '?fullText=true'
  let res = axios.get(countryDetailsEndpoint)
  return defer({
    countryDetails: res
  })
}

const countryListLoader = async () => {
  const endpoint = api + '/v3.1/all?fields=name,flags,population,region'
  const res = await axios.get(endpoint)
  return res.data
}

const LazyHome = lazy(() => import('./pages/HomePage.tsx'));
const LazyCountryList = lazy(() => import('./pages/CountryListPage'));
const LazyCountryDetails = lazy(() => import('./pages/CountryDetailsPage.tsx'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [

      {
        index: true,
        element: <LazyHome />,
      },
      {
        path: "/countries",
        element: <CountryLayout />,
        handle: {
          crumb: () => { return <Link to="/countries">Country List</Link> },
        },
        children: [
          {
            index: true,
            element: <LazyCountryList />,
            loader: countryListLoader,
          },
          {
            path: ":country",
            element: <LazyCountryDetails />,
            loader: countryDetailsLoader,
            handle: {
              //span because last destination in the breadcrumbs, this can never be a Link
              crumb: () => { return <span>Country Details</span> },
            },
          }
        ]
      },


    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
