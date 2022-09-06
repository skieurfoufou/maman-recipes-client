import React from "react";
import classes from "./LabelInput.module.css";

/**
 * cssStyle - should be `thin` or `wide`
 */
function LabelInput({
  register,
  name,
  input,
  cssStyle,
  defaultValue,
  placeholder,
}) {
  return (
    <>
      <label className={classes.label}>{name}</label>
      {cssStyle === "thin" ? (
        <input
          className={classes.input}
          defaultValue={defaultValue}
          {...register(input)}
        />
      ) : (
        <textarea
          className={classes.inputWide}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(input)}
        ></textarea>
      )}
    </>
  );
}

export default LabelInput;
