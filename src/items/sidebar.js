import React from "react";
import "../css_styles/sidebar.css";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <i className="spinner loading icon"></i>
        Home
      </a>

      <a className="menu-item" href="/merchandising">
        <i className="spinner loading icon"></i>
        Merchandising
      </a>

      <a className="menu-item" href="/experience">
        <i className="spinner loading icon"></i>
        Experience
      </a>
    </Menu>
  );
};