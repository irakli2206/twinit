import { useAsyncError } from "react-router-dom"

export const CountryDetailsError = () => {
    const errorData = useAsyncError() as any
    
    let helperText = ""
    //Too lazy to add text for every error call
    switch(errorData.response.status){
      case 404:
        helperText = "You are looking for a country that doesn't exist"
    }
  
    return (
      <div className='text-3xl flex flex-col gap-3 text-center'>
        <h1>Error {errorData.response.status}</h1>
        <h2>{helperText}</h2>
      </div>
    )
  }

  export const CountryListError = () => {
    const errorData = useAsyncError() as any
    
    let helperText = ""
    //Too lazy to add text for every error call
    switch(errorData.response.status){
      case 404:
        helperText = "No results"
    }
  
    return (
      <div className='text-3xl flex flex-col gap-3 text-center'>
        <h2>{helperText}</h2>
      </div>
    )
  }