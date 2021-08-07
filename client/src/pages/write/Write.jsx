import React, { useState, useEffect } from "react";
import "./write.css";
import axios from "../../helper/axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [photo, setPhoto] = useState("");

  const path = "http://localhost:5050/";

  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.append("file", file);
      const sendFile = async () => {
        const res = await axios.post("/post/upload", data);
        setPhoto(res.data);
      };
      sendFile();
    }
  }, [file]);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/post/create", { title, desc, photo });
      window.location.replace("/single/" + data.post._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="write">
      {file ? (
        <img className="writeImg" src={path + photo} alt="" />
      ) : (
        <img
          className="writeImg"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
          alt=""
        />
      )}

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button onClick={submitData} className="writeSubmit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
