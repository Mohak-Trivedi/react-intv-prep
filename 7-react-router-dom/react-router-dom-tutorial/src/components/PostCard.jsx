import React from 'react';
import {Link} from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
        }}
    >
        <h2 className="text-wrap">{post.title}</h2>
        <p className="text-wrap">{post.body}</p>
        <Link to={`/posts/${post.id}`}>View Comments</Link>
    </div>
  )
};

export default PostCard;