import React from 'react';

function Posts() {
  const postsInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: '101.523',
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: '99.159',
    },
  ];

  const post = postsInfos.map(({ author, image, likesUser, likesCounter }, index) => (
    <div className="post" key={index}>
      <div className="topo">
        <div className="usuario">
          <img src={`assets/${author}.svg`} alt='logo' />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={`assets/${image}.svg`} alt='logo' />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/${likesUser}.svg`} alt='logo' />
          <div className="texto">
            Curtido por <strong>{likesUser}</strong> e <strong>outras {likesCounter} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="posts">
        {post}
      </div>
    </div>
  );
};

export default Posts;
