import React, { useState } from "react";

function Post({ title }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
const handleDislike = () => {
    setLikes(likes - 1);
}
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
        width: "300px",
      }}
    >
      <h3>{title}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like ❤️</button>
      <button onClick={handleDislike}>Dis like ❤️</button>
    </div>
  );
}

function LikeCounter() {
  const posts = ["Post 1", "Post 2", "Post 3"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Like Counter App</h2>
      {posts.map((title, index) => (
        <Post key={index} title={title} />
      ))}
    </div>
  );
}

export default LikeCounter;
