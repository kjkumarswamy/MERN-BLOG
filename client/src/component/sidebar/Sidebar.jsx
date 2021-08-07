import React, { useEffect } from "react";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../../redux/actions/categoryAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);

  useEffect(() => {
    if (!category.categories) {
      return dispatch(categoryAction());
    }
  }, [dispatch, category.categories]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi,
          inventore, quidem, nesciunt nisi minima saepe beatae rem alias
          aspernatur voluptates nemo.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {category.categories
            ? category.categories.map((c) => (
                <li className="sidebarListItem" key={c._id}>
                  {c.name}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
