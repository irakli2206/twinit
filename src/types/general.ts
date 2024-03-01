export type FlagT = {
    svg: string
    alt: string
    png: string;
}

export type CountryNameT = {
    common: string
    official: string
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        }[]
    };
}

export type CurrencyT = {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

export type ListCountryT = {
    flags: FlagT;
    name: CountryNameT;
    region: string;
    population: number;
};

export type LanguageT = {
    [key: string]: string
}

export type CountryDetailsT = {
    name: CountryNameT;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: CurrencyT[];
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: LanguageT[];
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
        [key: string]: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: {
        [key: string]: number;
    };
    fifa: string;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: FlagT;
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string;
        regex: string;
    };
}


export type ContinentOptionT = {
    label: string
    active: boolean
}
