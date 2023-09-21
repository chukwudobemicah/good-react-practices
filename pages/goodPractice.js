import { useReducer, useState } from "react";

const reducer = (current, update) => {
  if (update.age > 18) {
    return { ...current, ...update };
  }

  return current;
};

export default function useForm() {
  const initialState = {
    name: "",
    age: "",
    occupation: "",
  };

  const [user, setField] = useReducer(reducer, initialState);

  const onInputChange = (e) => {
    const {
      target: { value, name },
    } = e;
  };
  setField({ [name]: value });
}
