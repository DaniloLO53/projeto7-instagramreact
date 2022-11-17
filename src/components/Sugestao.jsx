import React from "react";

function Sugestao(props) {
  const { index, name, status } = props;

  return (
    <div className="sugestao" key={index}>
      <div className="usuario">
        <img src={`assets/${name}.svg`} alt='profile-icon' />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">{status}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
};

export default Sugestao;
