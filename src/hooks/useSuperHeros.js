import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get(" http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post(" http://localhost:4000/superheroes", hero);
};

const UseSuperHeros = ({ onSuccess, onError }) => {
  return useQuery({
    queryKey: ["getHeroes"],
    queryFn: fetchData,
    onSuccess,
    onError,
    // enabled: false,
    // select: (data) => {
    //   return data.data.map((h) => h.name);
    // },
  });
};

export const useAddSuperHeroData = () => {
  return useMutation({
    mutationFn: addSuperHero,
  });
};

export default UseSuperHeros;
