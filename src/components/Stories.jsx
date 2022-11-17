import React from 'react';
import Story from './Story';

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

  const story = usersName.map((name, index) => <Story name={name} key={index} />);

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
