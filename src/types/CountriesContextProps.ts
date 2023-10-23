import { ChangeEventHandler, Dispatch, SetStateAction } from "react"

export interface CountriesContextTypes {
    countries: string[]
    setCountries: Dispatch<SetStateAction<string[]>>
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>,
    handleSearch: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}