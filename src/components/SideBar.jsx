import React from 'react';

function SideBar() {
  return (
    <div>
      <div class="sidebar">
        <div class="usuario">
          <img src="assets/catanacomics.svg" alt='profile-icon' />
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              Catana
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/bad.vibes.memes.svg" alt='profile-icon' />
              <div class="texto">
                <div class="nome">bad.vibes.memes</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/chibirdart.svg" alt='profile-icon' />
              <div class="texto">
                <div class="nome">chibirdart</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/razoesparaacreditar.svg" alt='profile-icon' />
              <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/adorable_animals.svg" alt='profile-icon' />
              <div class="texto">
                <div class="nome">adorable_animals</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/smallcutecats.svg" alt='profile-icon' />
              <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  );
};

export default SideBar;
