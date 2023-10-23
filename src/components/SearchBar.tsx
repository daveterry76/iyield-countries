'use client'

import { CountriesContext } from '@/contexts/CountriesContext'
import { CountriesContextTypes } from '@/types/CountriesContextProps'
import { TextField } from '@mui/material'
import React, { useContext } from 'react'

const SearchBar = () => {

    const { handleSearch } = useContext<CountriesContextTypes>(CountriesContext)

  return (
        <TextField
            label="Search for a country"
            variant="outlined"
            onChange={handleSearch}
            sx={{ width: '300px', marginBlock: '2rem' }}
      />  
    )
}

export default SearchBar