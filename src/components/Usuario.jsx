import React, { useState } from 'react';

function Usuario() {
  const [userName, setUserName] = useState('Catana');
  const [userImage, setUserImage] = useState('catanacomics');

  const changeUserName = () => {
    console.log(9)
    const name = prompt('Insira um nome: ');
    setUserName(name);
  }

  const changeUserImage = () => {
    const image = prompt('Insira um nome para a imagem: ');
    setUserImage(image);
  }

  return (
    <div>
      <div className="usuario" data-test="user">
        <img src={`assets/${userImage}.svg`} alt='profile-icon' onClick={() => changeUserImage()} data-test="profile-image" />
        <div className="texto">
          <strong>catanacomics</strong>
          <span data-test="name">
            {userName}
            <ion-icon name="pencil" data-test="edit-name" onClick={() => changeUserName()}></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
