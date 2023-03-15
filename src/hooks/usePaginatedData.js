import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = (page) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
};

const UsePaginatedData = ({ page, onSuccess, onError }) => {
  return useQuery({
    queryKey: ["pagination", page],
    queryFn: () => getData(page),
    onSuccess,
    onError,
    keepPreviousData: true,
  });
};

export default UsePaginatedData;
