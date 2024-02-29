export type FlagT = {
    url: string
    alt: string
}

export type ListCountryT = {
    name: string
    flag: FlagT,
    population: number
}

export type CountryDetailsT = ListCountryT & {
    capital: string
    region: string
    language: string
    currency: string
}

