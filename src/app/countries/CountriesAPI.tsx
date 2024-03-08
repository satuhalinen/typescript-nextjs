"use client";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface CountryCapital {
  capital: string[];
}

interface CountryInfo {
  common: string;
  official: string;
  nativeName: NativeNames;
}

interface NativeNames {
  [key: string]: LanguageDetails;
}

interface LanguageDetails {
  official: string;
  common: string;
}

const CountriesAPI = () => {
  const [countries, setCountries] = useState<CountryCapital[]>([]);
  const getCountriesInfo = async () => {
    const response = await axios.get(
       "https://restcountries.com/v3.1/all?fields=name,capital"
    );
    console.log(response.data);
    if (response.data) {
      setCountries(response.data);
    }
  };
  useEffect(() => {
    getCountriesInfo();
  }, []);
  return (
  <>
  <div>Countries API will be here</div>
  {countries.map((country, index) => (
<div key={`${country.capital}_${index}`}>
  <h2>{country.capital[0]}</h2>
</div>
  ))}
  </>
  )
};


export default CountriesAPI;

