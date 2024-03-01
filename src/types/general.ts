export type FlagT = {
    url: string
    alt: string
}

export type CountryNameT = {
    common: string
}

export type ListCountryT = {
    name: CountryNameT
    flag: FlagT,
    population: number
}

export type CountryDetailsT = ListCountryT & {
    capital: string
    region: string
    language: string
    currency: string
}


export type ContinentOptionT = {
    label: string
    active: boolean
}
