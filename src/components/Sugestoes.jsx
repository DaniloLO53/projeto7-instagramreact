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

  const suggestions = suggestionInfo.map(({ name, status }) => (
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/${name}.svg`} alt='profile-icon' />
        <div class="texto">
          <div class="nome">{name}</div>
          <div class="razao">{status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  ));
  return (
    <div>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestions}
      </div>
    </div>
  );
};

export default Sugestoes;
