import React, { useState, useEffect } from "react";
import fetchAllPokemons from "../helpers/fetchAllPokemons";

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchAllPokemons()
    .then(pokemons => {
        setIsLoading(false)
        setPokemons(pokemons)
    })
  }, []);
  return { isLoading, pokemons };
};
