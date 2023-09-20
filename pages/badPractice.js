import { useState } from "react";
import ServerComponent from "@@/server-components/ServerComponent";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <form>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
      <PageContent />
    </div>
  );
}
