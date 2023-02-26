import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
const Characters = () => {
  const [page, setPage] = useState(2);
  // Fetching
  const fetch_chracters = async ({ queryKey }) => {
    console.log(queryKey[1]);
    console.log(queryKey);
    const URL = `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  };

  const { data, status, isPreviousData } = useQuery(
    ["chracters", page],
    fetch_chracters,
    {
      keepPreviousData: true,
    }
  );

  if (status === "loading") {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Error...</div>
      </>
    );
  }

  return (
    <div className="characters">
      {data.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Prev
      </button>
      {console.log(data)}
      <button disabled={page === 42} onClick={() => setPage((p) => p + 1)}>
        Next
      </button>
    </div>
  );
};

export default Characters;
