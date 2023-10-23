'use client'

import { CountriesContext } from "@/contexts/CountriesContext";
import { CountriesContextTypes } from "@/types/CountriesContextProps";
import axios, { Axios } from "axios";
import { AxiosResponse } from "axios";
import { useContext, useState } from "react";


export function useFetchCountries () {

    const { countries, setCountries } = useContext<CountriesContextTypes>(CountriesContext)

    const apiUrl = "https://restcountries.com/v3.1/independent"

    const getCountries = async () => {
        try {
            const response: AxiosResponse = await axios.get(apiUrl);
            setCountries(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getCountries,
        countries
    }

}