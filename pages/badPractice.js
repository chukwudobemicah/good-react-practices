import { useState } from "react";

export default function useForm() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    occupation: "",
  });

  const onInputChange = (e) => {
    const {
      target: { value, name },
    } = e;
  };
  setUser((prevState) => ({ ...prevState, [name]: value }));
}
