import React from "react";
import classes from "./Header.module.css";
// import logo from "../../logo.svg";
import { useLocation } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

// const routes = [
//   { link: "/Breads", title: "Pains", key: 2 },
//   { link: "/Entries", title: "Entrees", key: 3 },
//   { link: "/MainCourses", title: "Plats Principaux", key: 4 },
//   { link: "/Desserts", title: "Desserts", key: 5 },
// ];

// function NavItem({ route, pathname }) {
//   return (
//     <Link to={route.link} className={classes.header_link}>
//       <h4
//         className={`${classes.title_navBar} ${
//           pathname === route.link ? classes.title_navbar_active : ""
//         }`}
//       >
//         {route.title}
//       </h4>
//     </Link>
//   );
// }

function Header({ categories }) {
  const { isLoggedIn } = useContext(AuthContext);
  const pathname = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      <div className={classes.title}>
        <h4>Les Recettes de Maman Sabine</h4>
      </div>
    </div>
  );
}

export default Header;
