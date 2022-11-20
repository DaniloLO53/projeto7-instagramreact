import React from 'react';
import Post from './Post';

function Posts() {
  const postsInitialInfos = [
    {
      author: 'meowed',
      image: 'gato-telefone',
      likesUser: 'respondeai',
      likesCounter: 101523,
    },
    {
      author: 'barked',
      image: 'dog',
      likesUser: 'adorable_animals',
      likesCounter: 99159,
    },
    {
      author: 'chibirdart',
      image: 'dog',
      likesUser: 'smallcutecats',
      likesCounter: 85123,
    },
  ];

  const post = postsInitialInfos.map(({
    author,
    image,
    likesUser,
    likesCounter,
  }) => {

    return (
      <Post
        key={author}
        author={author}
        image={image}
        likesUser={likesUser}
        likesCounter={likesCounter}
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
