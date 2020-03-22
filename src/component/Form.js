import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../context/ContextHooks";

const Form = ({ addTodo }) => {
  const [value, handelChange, reset] = useInputState("");
  return (
    <Paper style={{ padding: "0 1rem", margin: "1rem 0" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handelChange}
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};
export default Form;
