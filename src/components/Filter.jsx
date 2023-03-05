import React, { useState, useEffect } from "react";
import omer from "axios";

export default function Filter() {
  const [countries, setCountries] = useState([]);
  const [inputData, setInput] = useState("");

  //functions
  const getCountries = async function () {
    let require = await omer.get("https://restcountries.com/v2/all");
    console.log(require);
    setCountries(require.data);
  };
  const countryInput = function (input) {
    setInput(input.charAt(0).toUpperCase() + input.slice(1)); // finland == Finland
    console.log(inputData);
  };

  // END functions //
  // useEffect //

  useEffect(() => {
    getCountries();
  }, []);

  // End useEffect //
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter country"
        onChange={(e) => countryInput(e.target.value)}
      />
      {countries
        .filter((country) => country.name.startsWith(inputData))
        .map((country, index) => (
          <p key={index}>{country.name}</p>
        ))}
    </div>
  );
}