import React from 'react';

function Sugestoes() {
  const suggestionInfo = [
    {
      name: 'bad.vibes.memes',
      status: 'Segue você',
    },
    {
      name: 'chibirdart',
      status: 'Segue você',
    },
    {
      name: 'razoesparaacreditar',
      status: 'Novo no Instagram',
    },
    {
      name: 'adorable_animals',
      status: '',
    },
    {
      name: 'smallcutecats',
      status: 'Segue você',
    },
  ];

  const suggestions = suggestionInfo.map(({ name, status }, index) => (
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
  ));
  return (
    <div>
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestions}
      </div>
    </div>
  );
};

export default Sugestoes;
