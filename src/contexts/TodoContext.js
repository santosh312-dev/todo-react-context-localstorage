import { createContext, useContext } from "react";

// 1️⃣ Create Context with default values
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "ToDo Message",
      isCompleted: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

// 2️⃣ Custom hook to use TodoContext
export const useTodo = () => useContext(TodoContext);

// 3️⃣ Export Provider for wrapping
export const TodoProvider = TodoContext.Provider;