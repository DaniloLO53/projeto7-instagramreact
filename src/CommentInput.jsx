import React, { useEffect, useState } from "react";

function CommentInput() {
  const [comment, setComment] = useState('');
  const [commentDisabled, setCommentDisabled] = useState(true);
  console.log(comment, commentDisabled);

  useEffect(() => setCommentDisabled(comment.length === 0), [comment]);

  return (
    <div className="commentInput">
      <input
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        placeholder="Comentar"
      />
      <span>
        <button
          type="button"
          disabled={commentDisabled}
        >
          Post
        </button>
      </span>
    </div>
  );
};

export default CommentInput;
