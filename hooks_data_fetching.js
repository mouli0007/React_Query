import React, { useEffect, useState } from "react";
const URL = `https://rickandmortyapi.com/api/character`;

const Characters = () => {
  const [chracters, setChracters] = useState([]);

  // Fetching
  const fetch_chracters = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setChracters(data.results);
  };

  useEffect(() => {
    fetch_chracters();
  }, []);

  //
  return (
    <>
      {chracters.map((chracter) => {
        const { name, id } = chracter;
        return <div key={id}>{name}</div>;
      })}
    </>
  );
};

export default Characters;
