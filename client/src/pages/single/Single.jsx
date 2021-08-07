import React from "react";
import "./single.css";
import Sidebar from "../../component/sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
