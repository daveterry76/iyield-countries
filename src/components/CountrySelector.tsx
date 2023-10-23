'use client'

import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CountriesContext } from "@/contexts/CountriesContext";
import { CountriesContextTypes } from "@/types/CountriesContextProps";
import { useFetchCountries } from "@/services/useFetchCountries";
import { Box } from "@mui/material";
import { useFilteredCountries } from "@/services/useFilteredCountries";
import SearchBar from "./SearchBar";

const CountrySelector = () => {

  const { countries, searchTerm, setSearchTerm, handleSearch } = useContext<CountriesContextTypes>(CountriesContext);
  const { getCountries } = useFetchCountries();
  const { filteredCountries, doesCountryExist } = useFilteredCountries();
  const [dataLoaded, setDataLoaded] = useState(false)


  useEffect(() => {
    getCountries().then(() => {
      setDataLoaded(true)
    })
  }, [])


  return (
    <div>
      <SearchBar />
      
      <Box sx={{
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {dataLoaded ? (doesCountryExist ? (
          <List>
            {filteredCountries.map((country: any) => (
              <ListItem key={country.cca2} sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                border: 1,
                fontSize: '50px',
                paddingBlock: '2.5rem',
                marginTop: '2rem',
                width: '300px',
                borderRadius: '10px',
                cursor: 'pointer',
                ":hover": {
                  backgroundColor: '#3498db',
                  color: '#FFF'
                }
              }} >
                <ListItemText sx={{fontSize: 20}} primary={country.flag} />
                <ListItemText sx={{fontSize: 60}} primary={country.name.common} />
              </ListItem>
            ))}
          </List> 
        ) : (
          <p>{`Sorry, "${searchTerm}" does not exist.`}</p>
        )) : (
          <p>Loading countries ...</p>
        )
      }
      </Box>
    </div>
  );
};


export default CountrySelector;
