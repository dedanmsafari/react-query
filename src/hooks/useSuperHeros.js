import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get(" http://localhost:4000/superheroes");
};

const UseSuperHeros = ({ onSuccess, onError }) => {
  return useQuery({
    queryKey: ["getHeroes"],
    queryFn: () => fetchData(),
    onSuccess,
    onError,
    // enabled: false,
    // select: (data) => {
    //   return data.data.map((h) => h.name);
    // },
  });
};

export default UseSuperHeros;
