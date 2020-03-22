import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const TodoList = ({ todos, removeTodo, toggelTodo, editTodo }) => {
  return (
    <Paper>
      {todos.length > 0 ? (
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggelTodo={toggelTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      ) : (
        <Typography
          variant="h4"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          {" "}
          No Todo Now{" "}
        </Typography>
      )}
    </Paper>
  );
};

export default TodoList;
