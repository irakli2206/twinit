import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, LoaderFunctionArgs, RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'
import Root from './layouts/Root'
import axios from 'axios'


const api = import.meta.env.VITE_API

const countryListLoader = async ({request}: LoaderFunctionArgs) => {
  const countryListEndpoint = api + '/v3.1/all?fields=name,flags,population,continent'
  let res = axios.get(countryListEndpoint)
  return defer({
    countryList: res
  })
}

const countryDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const countryDetailsEndpoint = api + '/v3.1/name/' + params.country + '?fullText=true'
  let res = axios.get(countryDetailsEndpoint)
  return defer({
    countryDetails: res
  })
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    handle: {
      crumb: () => <Link to="/">Country List</Link>,
    },
    children: [
      {
        index: true,
        element: <CountryList />,
        loader: countryListLoader,

      },
      {
        path: "/:country",
        element: <CountryDetails />,
        loader: countryDetailsLoader,
        handle: {
          crumb: () => { return <span>Country Details</span> },
        }
      }
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
