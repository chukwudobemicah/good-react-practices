import { useEffect, useState } from "react";
import useOutsideClick from "@/utils/hooks/useOutsideClick";

export default function App() {
  const elRef = useRef(null);
  const closeModal = () => { };
  
  useOutsideClick(() => {
    closeModal();
  }, elRef);

  return <div ref={elRef}>container</div>;
}
