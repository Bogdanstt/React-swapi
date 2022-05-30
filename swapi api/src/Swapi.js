import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Swapi.css";

const Swapi = () => {
  const [number, setNumber] = useState(1);
  const [people, setMovie] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://swapi.dev/api/people/${number}/`
      );
      setMovie(response.data);
      // console.log(response.data);
    };
    fetchData();
  }, [number]);

  let keys = Object.keys(people);
  let values = Object.values(people);

  return (
    <div>
      <h1>Pick a movie</h1>
      <h3>Character is: {people.name}</h3>
      <h3>Gender: {people.gender}</h3>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
      <div>
        {keys.map((k, i) => {
          return (
            <h5>
              {keys[i]} : {values[i]}
            </h5>
          );
        })}
      </div>
    </div>
  );
};

export default Swapi;
