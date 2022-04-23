import React, { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import Loading from "../components/Loading";

export const HomePage = () => {
  const { isLoading, pokemons } = usePokemons();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredPokemons = () => {
    if(search.length ===0)
        return pokemons.slice(currentPage, currentPage + 10);
    const filtered = pokemons.filter(poke => poke.name.includes(search));
        return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 10);
  };
  const previusPage = () => {
    currentPage >= 10 ? setCurrentPage(currentPage - 10) : "";
  };

  const onSearchChange = ({target}) => {
    setCurrentPage(0)
    setSearch(target.value)
  }

  return (
    <div className="mt-5">
      <h2 className="text-center">LISTA DE POKEMONS</h2>
      <hr />
      <div className="text-center">
        <input
          type="text"
          className="mb-3 form-control"
          placeholder="Buscar Pokemons"
          value={ search }
          onChange={ onSearchChange }
        />
        <hr />
        <button className="btn btn-dark" onClick={previusPage}>
          Anteriores
        </button>
        &nbsp;
        <button className="btn btn-dark" onClick={nextPage}>
          Siguientes
        </button>
      </div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th style={{ width: 250 }}>ID</th>
            <th style={{ width: 450 }}>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {filteredPokemons().map((poke) => (
            <tr key={poke.id}>
              <td>{poke.id}</td>
              <td>{poke.name}</td>
              <td>
                <img src={poke.pic} alt="imagen del pokemon" height={85} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isLoading && <Loading />}
    </div>
  );
};
