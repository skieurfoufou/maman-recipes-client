import React from "react";
import classes from "./NavItem.module.css";
import { Link } from "react-router-dom";

function NavItem({ route, pathname }) {
  return (
    <Link to={route.link} className={classes.header_link}>
      <h5
        className={`${classes.title_navBar} ${
          pathname === route.link ? classes.title_navbar_active : ""
        }`}
      >
        {route.title}
      </h5>
    </Link>
  );
}

export default NavItem;
