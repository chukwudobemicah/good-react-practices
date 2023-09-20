import { useEffect, useState } from "react";

export default function App({ dashboardId }) {
  return <DashboardNotes key={dashboardId} />;
}

const DashboardNotes = () => {
  const [note, setNote] = useState("");

  return <div>{note}</div>;
};
