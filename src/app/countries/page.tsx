import CountriesDetail from "./CountriesDetail"

const mockData = [
    {
        name: "Afghanistan",
        capital: "Kabul",
        population: 27657145,
        area: 652230,
        flag: "https://restcountries.eu/data/afg.svg",
    },
    {
        name: "Åland Islands",
        capital: "Mariehamn",
        population: 28875,
        area: 1580,
        flag: "https://restcountries.eu/data/ala.svg",
    },
    {
        name: "Albania",
        capital: "Tirana",
        population: 2886026,
        area: 28748,
        flag: "https://restcountries.eu/data/alb.svg",
    },
]
const Countries = () => {
    return (
        <div>
            <div>Countries List will be here</div>
            <CountriesDetail countries={mockData}/>
        </div>)
   
}
export default Countries;