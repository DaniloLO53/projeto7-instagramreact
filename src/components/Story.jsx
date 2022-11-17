import React from "react";

function Story(props) {
  const { name } = props;

  return (
    <div className="story">
      <div className="imagem">
        <img src={`assets/${name}.svg`} alt='logo' />
      </div>
      <div className="usuario">
        {name}
      </div>
    </div>
  )
}

export default Story;
