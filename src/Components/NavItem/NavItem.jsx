import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

function NavItem({ route, pathname }) {
  return (
    <NavLink
      to={route.link}
      className={({ isActive }) =>
        `${classes.header_link} ${isActive ? classes.active_link : ""}`
      }
    >
      <h5 className={classes.title_navBar}>{route.title}</h5>
    </NavLink>
  );
}

export default NavItem;
