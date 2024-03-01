import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, LoaderFunctionArgs, RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'
import Root from './layouts/Root'
import axios from 'axios'
import CountryLayout from './layouts/CountryLayout'


export const api = import.meta.env.VITE_API


const countryDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const countryDetailsEndpoint = api + '/v3.1/name/' + params.country + '?fullText=true'
  let res = axios.get(countryDetailsEndpoint)
  return defer({
    countryDetails: res
  })
}

const countryListLoader = async ({ params }: LoaderFunctionArgs) => {
  const endpoint = api + '/v3.1/all?fields=name,flags,population,region'
  const res = await axios.get(endpoint)
  return res.data
}

const LazyHome = lazy(() => import('./pages/Home'));
const LazyCountryList = lazy(() => import('./pages/CountryList'));
const LazyCountryDetails = lazy(() => import('./pages/CountryDetails'));



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
