import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios.utils";
import axios from "axios";
const fetchData = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  // return axios.post(" http://localhost:4000/superheroes", hero);
  return request({ url: "/superheroes", method: "post", data: hero });
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

const onSuccess = (queryClient, data) => {
  // return queryClient.invalidateQueries("getHeroes");
  queryClient.setQueryData(["getHeroes"], (oldQueryData) => {
    return {
      ...oldQueryData,
      data: [...oldQueryData.data, data.data],
    };
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSuperHero,

    //optimistic update

    onMutate: async (heroData) => {
      //cancel previous request
      await queryClient.cancelQueries({
        queryKey: ["getHeroes"],
      });
      //save previous data
      const previousData = queryClient.getQueryData(["getHeroes"]);
      //do the update before
      queryClient.setQueryData(["getHeroes"], (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...heroData },
          ],
        };
      });

      return {
        previousData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData(["getHeroes"], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["getHeroes"],
      });
    },
    // onSuccess: () => onSuccess(queryClient),
    //onSuccess: () => onSuccess(queryClient),
    // onSuccess: (data) => {
    //   queryClient.setQueryData(["getHeroes"], (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
  });
};

export default UseSuperHeros;
