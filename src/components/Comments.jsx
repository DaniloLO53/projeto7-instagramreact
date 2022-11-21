import React from "react";
import Comment from "./Comment";

function Comments(props) {
  const { comments } = props;
  console.log(comments)
  const commentsComponent = comments.map((comment, index) => <Comment
    comment={comment}
    key={String(comment.author.length).concat(index)}
  />);

  return (
    <div>
      {commentsComponent}
    </div>
  );
};

export default Comments;
