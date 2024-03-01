import { ChangeEvent } from "react"
import { Dropdown, Input } from "../Elements"

type Props = {
    countryFilter: string
    continentFilter: string
    handleContinentChange: (value: string) => void
    handleSearchChange: (value: ChangeEvent<HTMLInputElement>) => void
}

const SearchFilters = ({ countryFilter, continentFilter, handleContinentChange, handleSearchChange }: Props) => {

    return (
        <div className="flex gap-2 max-w-screen-sm mx-auto mb-4">
            <Input label='Name' value={countryFilter || ""} onChange={handleSearchChange} />
            <Dropdown label="Region" value={continentFilter} onChange={handleContinentChange} />
        </div>
    )
}

export default SearchFilters