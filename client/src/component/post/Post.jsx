import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const path = "http://localhost:5050/";
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={path + post.photo} alt="" />
      ) : (
        <img
          className="postImg"
          src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categoriesId
            ? post.categoriesId.map((c) => (
                <span className="postCat" key={c._id}>
                  {c.name}
                </span>
              ))
            : null}
        </div>
        <Link
          to={`/single/${post._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="postTitle">{post.title}</div>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDesc">{post.desc}</div>
    </div>
  );
};

export default Post;
