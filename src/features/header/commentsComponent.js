import react from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CommmentObj } from "./headerSlice";
import { selectAllComments } from "./headerSlice";

export const SingleComment = (props) => {
  const comment = props.comment;

  return (
    <div className="comment-container">
      <div className="comment-body">-{comment.comment}</div>
      <div className="comment-bottom">
        <div>Author: {comment.author}</div>
        <div>{comment.date.toString()}</div>
      </div>
    </div>
  );
};

export const CommentsComponent = (props) => {
  const [seeAll, toggleSeeAll] = useState(false);

  /** @type {Array<CommentObj>} */
  const commentObjs = useSelector(selectAllComments);

  /** @type {Array<CommentObj>} */
  //const commentObjs = props.comments;

  const commentComponents = [];
  const length = seeAll ? commentObjs.length : 1;
  const actualLength = commentObjs.length;

  for (let i = 0; i < length; i += 1) {
    const num = actualLength - i - 1;
    const comment = commentObjs[num];
    commentComponents.push(
      <SingleComment comment={comment} key={comment.id} />
    );
  }

  return (
    <div className="comment-container">
      <>{commentComponents}</>
      {actualLength > 1 && (
        <button onClick={() => toggleSeeAll(!seeAll)}>
          {seeAll ? "Collapse" : "See All"}
        </button>
      )}
    </div>
  );
};
