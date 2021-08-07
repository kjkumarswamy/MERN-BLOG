import React, { useEffect } from "react";
import Header from "../../component/header/Header";
import "./home.css";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import { allpostsAction } from "../../redux/actions/postAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.allposts);

  useEffect(() => {
    if (!postState.posts) {
      return dispatch(allpostsAction());
    }
  }, [postState.posts, dispatch]);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={postState.posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
