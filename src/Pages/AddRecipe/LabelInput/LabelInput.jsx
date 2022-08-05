import React from "react";
import classes from "./LabelInput.module.css";

/**
 * cssStyle - should be `thin` or `wide`
 */
function LabelInput({ register, name, input, cssStyle }) {
  return (
    <>
      <label className={classes.label}>{name}</label>
      {cssStyle === "thin" ? (
        <input className={classes.input} {...register(input)} />
      ) : (
        <textarea className={classes.inputWide} {...register(input)}></textarea>
      )}
    </>
  );
}

export default LabelInput;
