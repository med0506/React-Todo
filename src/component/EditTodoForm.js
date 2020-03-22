import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../context/ContextHooks";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";

const EditTodoForm = ({ toggel, editTodo, id, task }) => {
  const [value, handelChange, reset] = useInputState(task);
  const handelSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    toggel();
    reset();
  };
  return (
    <form
      onSubmit={handelSubmit}
      style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
    >
      <TextField value={value} onChange={handelChange} fullWidth autoFocus />
      <IconButton aria-label="Save" onClick={handelSubmit}>
        <SaveIcon />
      </IconButton>
    </form>
  );
};
export default EditTodoForm;
