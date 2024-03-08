import Image from "next/image";

interface IProps {
    countries: Country[];
}
    interface Country {
        name: string;
        capital: string;
        population: number;
        area: number;
        flag: string;
    }

    const CountriesDetail = (props: IProps) => {
    return (
        <div>
            <h1>Country Detail</h1>
            {props.countries.map((country) => (
                <div key={country.name}>
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Area: {country.area}</p>
                    <Image src={country.flag} alt={country.name} width="300" height="400"/>
                    </div>
            ))}
        </div>
    )
}

export default CountriesDetail;