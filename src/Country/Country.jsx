import { useState } from "react";
import "./Country.css";
//import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Country Name: {name.common}</h3>
      <img style={{ height: 160, width: 320 }} src={flags.png} alt="" />
      <p>Country Population: {population}</p>
      <p>Country Area: {area}</p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark As Visit
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited && "I have Visited this Country"}
      {/* <CountryDetail
        country={country}
        handleVisited={handleVisited}
      ></CountryDetail> */}
    </div>
  );
};

export default Country;
