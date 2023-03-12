import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = (url) => {
  return axios.get(url);
};
const RQSuperHeroesPage = () => {
  const { data, isError, isLoading, error } = useQuery(["getHeroes"], () =>
    fetchData(" http://localhost:4000/superheroes")
  );

  if (isError) {
    return <h2>Error loading data,{error.message}</h2>;
  }
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Super Heroes page</h2>
      <div>
        {data?.data.map((d) => (
          <div key={d.id}>{d.name}</div>
        ))}
      </div>
    </>
  );
};

export default RQSuperHeroesPage;
