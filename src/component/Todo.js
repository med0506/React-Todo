import React from "react";
import useToggel from "../context/useToggel";
import ListItem from "@material-ui/core/ListItem";
import CheckBox from "@material-ui/core/CheckBox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ task, completed, removeTodo, id, toggelTodo, editTodo }) => {
  const [isEditting, toggel] = useToggel(false);

  return (
    <>
      <ListItem style={{ height: "64px" }}>
        {isEditting ? (
          <EditTodoForm
            toggel={toggel}
            editTodo={editTodo}
            id={id}
            task={task}
          />
        ) : (
          <>
            <CheckBox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggelTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggel}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
};
export default Todo;
