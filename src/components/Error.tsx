import { AxiosError } from "axios"
import { useAsyncError } from "react-router-dom"

export const CountryDetailsError = () => {
  const errorData = useAsyncError() as AxiosError

  let errorMessage = 'An error occurred while fetching country details.'
  //Too lazy to add text for every error call
  if (errorData.response) {
    switch (errorData.response.status) {
      case 404:
        errorMessage = "You are looking for a country that doesn't exist."
        break
      default:
        errorMessage = 'Sorry, an unexpected error occurred.'
        break
    }
  }


  return (
    <div className='text-3xl flex flex-col gap-3 text-center'>
      <h2>{errorMessage}</h2>
    </div>
  )
}

export const CountryListError = () => {
  const errorData = useAsyncError() as AxiosError

  let errorMessage = 'An error occurred while fetching country list.'

  if (errorData.response) {
    switch (errorData.response.status) {
      case 404:
        errorMessage = "No results"
        break
      default:
        errorMessage = 'Sorry, an unexpected error occurred.'
        break
    }
  }

  return (
    <div className='text-3xl flex flex-col gap-3 text-center'>
      <h2>{errorMessage}</h2>
    </div>
  )
}