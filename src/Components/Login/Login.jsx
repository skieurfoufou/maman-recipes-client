import React, { useState } from "react";
import classes from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { login, isLoggedIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmailValidation = (email) => isValidEmail(email);

  //TODO: create a util
  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const onFormSubmit = async (formData) => {
    setIsLoading(true);
    await login(formData.email, formData.password);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isLoggedIn) {
    return <Navigate to="/AddRecipe" replace />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={classes.container}>
          <label className={classes.label}>Email</label>
          <input
            className={classes.input}
            {...register("email", {
              required: "email Obligatoire",
              validate: handleEmailValidation,
            })}
          />
          <p className={classes.error}>{errors.email?.message}</p>
          <label className={classes.label}>Password</label>
          <input
            className={classes.input}
            {...register("password", {
              required: { value: true, message: "mot de passe Obligatoire" },
              minLength: { value: 4, message: "min 4 characteres" },
            })}
            placeholder="min 4 characteres"
          />
          <p className={classes.error}>{errors.password?.message}</p>
          <input
            type="submit"
            className={classes.buttonSubmit}
            value="Connecte Toi"
          />
        </div>
      </form>
    </>
  );
}

export default Login;
