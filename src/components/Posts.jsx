import React, { useState } from 'react';

function Posts() {
  console.log('rendered')
  const postsInitialInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: 101523,
      liked: false,
      imageClicked: '',
      saved: false,
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: 99159,
      liked: false,
      imageClicked: '',
      saved: false,
    },
  ];
  const [postInfos, setPostInfos] = useState(postsInitialInfos);

  const formater = new Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 6,
  });

  console.log(postInfos)

  const post = postsInitialInfos.map(({ author, image, likesUser, likesCounter }, index) => (
    <div className="post" key={index} data-test="post">
      <div className="topo">
        <div className="usuario">
          <img src={`assets/${author}.svg`} alt='logo' />
          meowed
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal" />
        </div>
      </div>

      <div className="conteudo">
        <img src={`assets/${image}.svg`} alt='logo' onDoubleClick={() => {
          setPostInfos((prevState) => {
            prevState[index].liked = true;
            prevState[index].imageClicked = prevState[index].imageClicked === 'noClicked'
              ? 'clicked'
              : 'noClicked';
            return [...prevState];
          });
        }} data-test="post-image" />
        <ion-icon
          name="heart"
          className={
            postInfos[index].imageClicked === 'clicked'
              ? 'heart-animation'
              : postInfos[index].imageClicked === 'noClicked'
                ? 'heart-animation2'
                : 'heart-hide'}
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={postInfos[index].liked === true ? 'heart' : 'heart-outline'}
              onClick={() => {
                setPostInfos((prevState) => {
                  prevState[index].liked = !prevState[index].liked;
                  return [...prevState];
                });
              }}
              data-test="like-post"
              className="heart-menu"
            />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <div>
            <ion-icon
              name={postInfos[index].saved === true ? 'bookmark' : 'bookmark-outline'}
              onClick={() => {
                setPostInfos((prevState) => {
                  prevState[index].saved = !prevState[index].saved;
                  return [...prevState];
                });
              }}
              data-test="save-post"
            />
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/${likesUser}.svg`} alt='logo' />
          <div className="texto">
            Curtido por <strong>
              {likesUser}
            </strong> e outras <strong>
              <span data-test="likes-number">
                {
                  postInfos[index].liked === true
                    ? formater.format(likesCounter + 1)
                    : formater.format(likesCounter)
                }
              </span> pessoas </strong>
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
