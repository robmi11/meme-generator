import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";

const StarWars = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    try {
      fetch(`https://swapi.dev/api/people/${characterId}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    } catch (err) {
      // console.log(err);
      setStarWarsData({ error: "You have reached the end" });
      console.log(starWarsData);
    }
  }, [characterId]);

  const getNextCharacter = () => {
    setCharacterId(characterId + 1);
  };
  return (
    <div>
      <Button variant="outlined" onClick={getNextCharacter}>
        Get next character
      </Button>
      {!starWarsData.detail ? (
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      ) : (
        <h3>There is no character with id: {characterId}!</h3>
      )}
    </div>
  );
};

export default StarWars;
