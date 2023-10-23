import { CountriesContext } from "@/contexts/CountriesContext";
import { CountriesContextTypes } from "@/types/CountriesContextProps";
import { useContext } from "react";

export const useFilteredCountries = () => {

    const { countries, searchTerm } = useContext<CountriesContextTypes>(CountriesContext)

    const filteredCountries = countries.filter((country: any) => {
        const countryCode: any = country?.cca2;
        const countryName: any = country?.name.common;
        if (searchTerm.toLowerCase() === searchTerm) {
          return countryName.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return countryName.includes(searchTerm) || countryCode === searchTerm;
        }
      });

    const doesCountryExist: boolean = filteredCountries.length > 0;


      return {
        filteredCountries,
        doesCountryExist
      }
}