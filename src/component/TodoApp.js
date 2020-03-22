import React, { useEffect } from "react";
import useTodosState from "../context/useTodosState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import Form from "./Form";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || []);
  const { todos, addTodo, removeTodo, toggelTodo, editTodo } = useTodosState(
    initialTodos
  );
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        paddind: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit"> TODOS WITH HOOKS </Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center" style={{ paddingTop: "1rem" }}>
        <Grid item xs={11} md={7} lg={4}>
          <Form addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggelTodo={toggelTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TodoApp;
