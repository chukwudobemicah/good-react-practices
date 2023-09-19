import React, { useEffect, useState } from "react";
import useArrayState from "@/utils/hooks/useArrayState";

export default function goodPractice() {
  const [todos, { add, remove }] = useArrayState([]);

  const addTodo = () => {
    add({ name: "some new todo" });
  };

  return <ul></ul>;
}
