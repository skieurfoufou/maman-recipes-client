import React from "react";
import Login from "../../Components/Login/Login";
import classes from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={classes.container}>
      <Login />
    </div>
  );
}

export default LoginPage;
