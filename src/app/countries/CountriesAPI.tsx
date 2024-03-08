"use client";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {Card} from "react-bootstrap"

interface CountryDetails {
  capital: string[];
  name: CountryInfo;
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
  const [countries, setCountries] = useState<CountryDetails[]>([]);
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
    <Card 
    key={`${country.capital}_${index}`}
    style={{maxWidth: "20rem", height: "10rem"}}
    >
<div key={`${country.capital}_${index}`}>
  <h2>{country.capital[0]}</h2>
  <p>Country Name: {country.name.official[0]}</p>
  <p>{}</p>
  {Object.entries(country.name.nativeName).map(([key, value]) => (
    <div key={key}>
    <p key={key}>
      {key}: {value.common}
    </p>
    <p>{value.common}</p>
    <p>{value.official}</p>
    </div>
  ))}
</div>
</Card>
  ))}
  </>
  )
};


export default CountriesAPI;

