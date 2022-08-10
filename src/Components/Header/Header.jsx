import React from "react";
import classes from "./Header.module.css";
import { useLocation } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import SearchBar from "./SearchBar/SearchBar";

function Header({ categories }) {
  const { isLoggedIn } = useContext(AuthContext);
  const pathname = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <NavItem route={{ link: "/", title: "Home" }} pathname={pathname} />
        {categories.map((category) => {
          return (
            <NavItem
              key={category.id}
              route={{ link: category.link, title: category.name }}
              pathname={pathname}
            />
          );
        })}
        {isLoggedIn ? (
          <NavItem
            route={{ link: "/AddRecipe", title: "Ajouter une Recette" }}
            pathname={pathname}
          />
        ) : (
          <NavItem
            route={{ link: "/login", title: "Login" }}
            pathname={pathname}
          />
        )}
      </div>
      <div className={classes.subContainer}>
        <div className={classes.title}>
          <h4>Les Recettes de Maman Sabine</h4>
        </div>
        <SearchBar />
        {/* <div className={classes.searchContainer}>
          <img
            src={search}
            className="logo_search"
            alt="logo"
            height="45"
            width="45"
          />
          <input
            placeholder="search"
            className={classes.search}
            onChange={(e) => {
              setValue(e.target.value);
              console.log(value);
            }}
          ></input>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
