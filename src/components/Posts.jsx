import React, { useState } from 'react';
import Post from './Post';

function Posts() {
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
    {
      author: 'chibirdart',
      image: 'dog',
      likesUser: 'smallcutecats',
      likesCounter: 85123,
      liked: false,
      imageClicked: '',
      saved: false,
    },
  ];
  const [postInfos, setPostInfos] = useState(postsInitialInfos);

  const formater = new Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 6,
  });

  const post = postsInitialInfos.map(({
    author,
    image,
    likesUser,
    likesCounter,
  }, index) => {
    let imageHeartHandle;
    const imageIsClicked = postInfos[index].imageClicked;
    const postLiked = !!postInfos[index].liked;
    const postSaved = !!postInfos[index].saved;

    if (imageIsClicked === 'clicked') {
      imageHeartHandle = 'heart-animation';
    } else if (imageIsClicked === 'noClicked') {
      imageHeartHandle = 'heart-animation2';
    } else {
      imageHeartHandle = 'heart-hide';
    }

    const clickedCounterFormated = formater.format(likesCounter);
    const counterFormated = formater.format(likesCounter + 1);

    return (
      <Post
        key={author}
        index={index}
        author={author}
        imageHeartHandle={imageHeartHandle}
        image={image}
        setPostInfos={setPostInfos}
        postLiked={postLiked}
        postSaved={postSaved}
        likesUser={likesUser}
        counterFormated={counterFormated}
        clickedCounterFormated={clickedCounterFormated}
      />
    );
  });

  return (
    <div>
      <div className="posts">
        {post}
      </div>
    </div>
  );
}

export default Posts;
