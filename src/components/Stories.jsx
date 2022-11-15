import React from 'react';

function Stories() {
  const usersName = [
    '9gag',
    'meowed',
    'barked',
    'nathanwpylestrangeplanet',
    'wawawicomics',
    'respondeai',
    'filomoderna',
    'memeriagourmet',
  ];

  const story = usersName.map((name, index) => (
    <div className="story" key={index}>
      <div className="imagem">
        <img src={`assets/${name}.svg`} alt='logo' />
      </div>
      <div className="usuario">
        {name}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="stories">
        {story}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Stories;
