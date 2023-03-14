import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHeroes = () => {
  axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  useQuery({
    queryKey: ["superheroes"],
    queryFn: () => fetchHeroes(),
  });
  useQuery({
    queryKey: ["friends"],
    queryFn: () => fetchFriends(),
  });

  return <div>Parallel Queries Page</div>;
};

export default ParallelQueriesPage;
