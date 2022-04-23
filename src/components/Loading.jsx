import React from "react";

const Loading = () => {
  return (
    <div className="alert alert-info d-flex align-items-center">
      <img src="/assets/pikachu.png" alt="loading" height={100}/>
      <p>Cargando ... </p>
    </div>
  );
};

export default Loading;
