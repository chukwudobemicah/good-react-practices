import { useState } from "react";

export default function App() {
  return (
    <div>
      <Form />
      <PageContent />
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");

  return (
    <form>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </form>
  );
}
