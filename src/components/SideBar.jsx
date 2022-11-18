import React from 'react';
import Sugestoes from './Sugestoes';
import Usuario from './Usuario';

function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <Usuario />
        <Sugestoes />
        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
          • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  );
}

export default SideBar;
