import React, { useEffect, useState } from 'react';

function Posts() {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [icon, setIcon] = useState('bookmark-outline');
  const [heart, setHeart] = useState('heart-outline');
  const [imageClicked, setImageClicked] = useState(false);
  const [currentKey, setCurrentKey] = useState('');

  console.log(currentKey);

  useEffect(() => {
    if (saved === true) {
      setIcon('bookmark');
    } else {
      setIcon('bookmark-outline');
    }

  }, [saved]);

  useEffect(() => {
    if (liked === true) {
      setHeart('heart');
    } else {
      setHeart('heart-outline');
    }

  }, [liked]);

  const postsInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: liked ? 101.524 : 101.523,
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: liked ? '99.160' : 99.159,
    },
  ];

  const post = postsInfos.map(({ author, image, likesUser, likesCounter }, index) => (
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
          setImageClicked(!imageClicked);
          setCurrentKey(index);
          setLiked(true);
        }} data-test="post-image" />
        <ion-icon name="heart" className={liked && currentKey === index && imageClicked ? 'heart-animation' : 'heart-hide'}></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={heart === 'heart' && currentKey === index ? 'heart' : 'heart-outline'} onClick={() => {
              setCurrentKey(index);
              setLiked(!liked);
            }} data-test="like-post" className="heart-menu"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={icon === 'bookmark' && currentKey === index ? 'bookmark' : 'bookmark-outline'} onClick={() => {
              setCurrentKey(index);
              setSaved(!saved);
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
