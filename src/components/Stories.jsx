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

  const story = usersName.map((name) => (
    <div class="story">
      <div class="imagem">
        <img src={`assets/${name}.svg`} alt='logo' />
      </div>
      <div class="usuario">
        {name}
      </div>
    </div>
  ));

  return (
    <div>
      <div class="stories">
        {story}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Stories;
