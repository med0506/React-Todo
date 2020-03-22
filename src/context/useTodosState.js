import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTodo => {
      setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    },
    removeTodo: todoId => {
      const updatedTodo = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggelTodo: todoId => {
      const updatedTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (todoId, newTask) => {
      const editedTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask, completed: false } : todo
      );
      setTodos(editedTodo);
    }
  };
};
