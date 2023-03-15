import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchData = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const UseInfiniteData = ({ onSuccess, onError }) => {
  return useInfiniteQuery({
    queryKey: ["infinite-data"],
    queryFn: (data) => fetchData(data),
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    onSuccess,
    onError,
  });
};

export default UseInfiniteData;
