import React from "react";

const Card = ({ post, onRemove }) => {
  const handleRemove = () => {
    onRemove(post.id);
  };
  return (
    <div>
      <h3>post.title</h3>
      <h3>post.body</h3>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};
export default Card;
