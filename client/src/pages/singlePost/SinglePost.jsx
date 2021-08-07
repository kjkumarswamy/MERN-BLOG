import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import { useDispatch, useSelector } from "react-redux";
import { singlePost } from "../../redux/actions/postAction";
import axios from "../../helper/axios";

const SinglePost = () => {
  const path = "http://localhost:5050/";
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.singlepost);
  const signinData = useSelector((state) => state.signin);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [updateMode, setUpdateMode] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(singlePost(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (postData.post) {
      setNewTitle(postData.post.title);
      setNewDesc(postData.post.desc);
    }
  }, [postData.post]);
  const { title, desc, userId, photo, createdAt } = postData.post;

  const handleDelete = async () => {
    await axios.delete("/post/delete/" + id);
    window.location.replace("/");
  };

  const handleUpdate = async () => {
    const data = { title: newTitle, desc: newDesc };
    await axios.put("/post/update/" + id, data);
    window.location.reload("/single/" + id);
  };

  return (
    <div className="singlePost">
      {postData.loading ? (
        <i className="spinner fas fa-circle-notch fa-spin"></i>
      ) : null}
      <div className="singlePostWrapper">
        {photo ? (
          <img src={path + photo} alt="" className="singlePostImg" />
        ) : null}
        {updateMode ? (
          <input
            type="text"
            value={newTitle}
            className="singlePostTitleInput"
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {signinData && userId ? (
              userId.name === signinData.user.name ? (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon fas fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon fas fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </div>
              ) : null
            ) : null}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :<b>{userId ? userId.name : null}</b>
          </span>
          <span className="singlePostDate">
            {new Date(createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode ? (
          <button className="singlePostUpdate" onClick={handleUpdate}>
            Update
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SinglePost;
