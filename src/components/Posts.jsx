import React from 'react';
import Post from './Post';

function Posts() {
  const postsInitialInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: 101523,
      comments: [
        {
          author: 'smallcutecats',
          text: 'Que fofo s2s2'
        },
        {
          author: 'bad.vibes.memes',
          text: 'Sem graça'
        },
        {
          author: 'adorable_animals',
          text: 'Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada. Era uma casa muito engraçada, não tinha teto, não tinha nada.'
        },
      ],
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: 99159,
      comments: [
        {
          author: 'smallcutecats',
          text: 'Que fofo s2s2'
        },
        {
          author: 'bad.vibes.memes',
          text: 'Sem graça'
        },
        {
          author: 'adorable_animals',
          text: 'Lindinho'
        },
      ],
    },
    {
      author: 'chibirdart',
      image: 'dog',
      likesUser: 'smallcutecats',
      likesCounter: 85123,
      comments: [
        {
          author: 'smallcutecats',
          text: 'Que fofo s2s2'
        },
        {
          author: 'bad.vibes.memes',
          text: 'Sem graça'
        },
        {
          author: 'adorable_animals',
          text: 'Lindinho'
        },
      ],
    },
  ];

  const post = postsInitialInfos.map(({
    author,
    image,
    likesUser,
    likesCounter,
    comments,
  }) => {

    return (
      <Post
        key={author}
        author={author}
        image={image}
        likesUser={likesUser}
        likesCounter={likesCounter}
        comments={comments}
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
