import React from "react";

function Post(props) {
  const {
    index,
    author,
    imageHeartHandle,
    image,
    setPostInfos,
    postLiked,
    postSaved,
    likesUser,
    counterFormated,
    clickedCounterFormated
  } = props;

  return (
    <div className="post" data-test="post" >
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
        <img
          src={`assets/${image}.svg`}
          alt='logo'
          onDoubleClick={() => setPostInfos((prevState) => {
            prevState[index].liked = true;
            prevState[index].imageClicked = (
              prevState[index].imageClicked === 'noClicked' ? 'clicked' : 'noClicked'
            );

            return [...prevState];
          })}
          data-test="post-image"
        />
        <ion-icon
          name="heart"
          className={imageHeartHandle}
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={postLiked ? 'heart' : 'heart-outline'}
              onClick={() => setPostInfos((prevState) => {
                prevState[index].liked = !prevState[index].liked;

                return [...prevState];
              })}
              data-test="like-post"
              className="heart-menu"
            />
            <ion-icon name="chatbubble-outline" />
            <ion-icon name="paper-plane-outline" />
          </div>
          <div>
            <ion-icon
              name={postSaved ? 'bookmark' : 'bookmark-outline'}
              onClick={() => setPostInfos((prevState) => {
                prevState[index].saved = !prevState[index].saved;

                return [...prevState];
              })}
              data-test="save-post"
            />
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/${likesUser}.svg`} alt='logo' />
          <div className="texto">
            Curtido por <strong> {likesUser} </strong> e outras <strong>
              <span data-test="likes-number">
                {postLiked ? counterFormated : clickedCounterFormated}
              </span> pessoas </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
