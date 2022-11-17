import React, { useState } from 'react';

function Usuario() {
  const [userName, setUserName] = useState('Catana');
  const [userImage, setUserImage] = useState(`assets/catanacomics.svg`);

  const changeUserName = () => {
    let name = prompt('Insira um nome: ');
    if (name.length > 0) {
      setUserName(name);
    } else {
      name = prompt('Insira um nome: ');
    }
  }

  const changeUserImage = () => {
    let image = prompt('Insira um nome para a imagem: ');
    if (image.length > 0) {
      setUserImage(image);
    } else {
      image = prompt('Insira um nome para a imagem: ');
    }
  }

  console.log(userImage)

  return (
    <div>
      <div className="usuario-name" data-test="user">
        <img
          src={userImage}
          alt='profile-icon'
          onClick={() => changeUserImage()}
          data-test="profile-image"
        />
        <div className="texto-nome">
          <strong>catanacomics</strong>
          <span data-test="name">
            {userName}
            <ion-icon
              name="pencil"
              data-test="edit-name"
              onClick={() => changeUserName()}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
