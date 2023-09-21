import { useEffect, useRef, useState } from "react";

export default function App() {
  const [height, setHeight] = useState(0);
  const elRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elRef.current.offsetHeight);
    }
  }, [elRef.current]);

  return <div ref={elRef}></div>;
}
