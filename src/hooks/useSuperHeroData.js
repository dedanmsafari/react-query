import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = ({ queryKey }) => {
  const heroid = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroid}`);
};

const useSuperHeroData = (heroid, onSuccess, onError) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["hero-data", heroid],
    queryFn: (data) => fetchData(data),
    initialData: () => {
      const hero = queryClient
        .getQueryData(["getHeroes"])
        ?.data?.find((hero) => hero.id === parseInt(heroid));

      if (hero) {
        return { data: hero }; //returnning data as hero
      } else {
        return undefined;
      }
    },
    onSuccess,
    onError,
    select: (data) => {
      return data.data;
    },
  });
};

export default useSuperHeroData;
