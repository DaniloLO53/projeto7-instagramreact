import React, { useEffect, useState } from 'react';

function Posts() {
  console.log('rendered')
  const postsInitialInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: 101.523,
      liked: false,
      imageClicked: false,
      saved: false,
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: 99.159,
      liked: false,
      imageClicked: false,
      saved: false,
    },
  ];
  console.log(postsInitialInfos)
  const [postInfos, setPostInfos] = useState(postsInitialInfos);

  const post = postsInitialInfos.map(({ author, image, likesUser, likesCounter }, index) => (
    <div className="post" key={index} data-test="post">
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
        <img src={`assets/${image}.svg`} alt='logo' onDoubleClick={() => {
          setPostInfos((prevState) => {
            prevState[index].liked = true;
            prevState[index].imageClicked = !prevState[index].imageClicked;
            return [...prevState];
          });
          // setPostInfos([...postInfos, postInfos[index].imageClicked = true]);
        }} data-test="post-image" />
        <ion-icon name="heart" className={postInfos[index].liked === true && postInfos[index].imageClicked === true ? 'heart-animation' : 'heart-hide'}></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={postInfos[index].liked === true ? 'heart' : 'heart-outline'} onClick={() => {
              setPostInfos((prevState) => {
                prevState[index].liked = !prevState[index].liked;
                return [...prevState];
              });
            }} data-test="like-post" className="heart-menu"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={postInfos[index].saved === true ? 'bookmark' : 'bookmark-outline'} onClick={() => {
              setPostInfos((prevState) => {
                console.log(2)
                prevState[index].saved = !prevState[index].saved;
                console.log(prevState[index].saved)
                return [...prevState];
              });
            }} data-test="save-post"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/${likesUser}.svg`} alt='logo' />
          <div className="texto">
            Curtido por <strong>{likesUser}</strong> e <strong>outras <span data-test="likes-number">{likesCounter}</span> pessoas</strong>
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
