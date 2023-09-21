import { useCallback, useState } from "react";

export default function App() {
  const [height, setHeight] = useState(0);

  const elRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.offsetHeight);
    }
  }, []);

  return <div ref={elRef}></div>;
}
