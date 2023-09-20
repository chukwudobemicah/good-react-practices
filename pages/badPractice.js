import { useEffect, useState } from "react";

export default function App({ dashboardId }) {
  const [note, setNote] = useState("");
  useEffect(() => {
    setNote("");
  }, []);

  return <div>{note}</div>;
}
