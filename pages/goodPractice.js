import { useQuery } from "react-query";

export default function goodPractice() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("url").then((res) => res.json())
  );

  if (isLoading) return <Spinner />;
  if (error) return "An error has occurred" + error.message;

  return (
    <div className="App">{data?.image && <img src={data.image}></img>}</div>
  );
}
