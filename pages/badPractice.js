import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const add = (newValue) => {
    setTodos((currentState) => [...currentState, newValue]);
  };

  const remove = (index) => {
    setTodos((currentState) => {
      const newState = [...currentState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return <ul>some todos</ul>;
}
