'use client'

import { CountriesDefaultState } from '@/constants/CountriesDefaultState'
import { CountriesContextTypes } from '@/types/CountriesContextProps'
import React, { createContext, useState } from 'react'

export const CountriesContext = createContext<CountriesContextTypes>(CountriesDefaultState)

const CountriesContextProvider = ({ children }: any): any => {

    const [countries, setCountries] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = (e: any) => {
      setSearchTerm(e.target.value);
    };
  
  return (
    <CountriesContext.Provider value={{ countries, setCountries, searchTerm, setSearchTerm, handleSearch }}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider