import { CountriesContextTypes } from "@/types/CountriesContextProps";

export const CountriesDefaultState: CountriesContextTypes = {
    countries: [],
    setCountries: () => {},
    searchTerm: "",
    setSearchTerm: () => {}
}