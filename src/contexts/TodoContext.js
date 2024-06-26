import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: {
        id: 1,
        task: "some task",
        completed: false,
    },
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;