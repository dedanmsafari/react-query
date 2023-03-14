import React from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchData = (heroid) => {
  return axios.get(` http://localhost:4000/superheroes/${heroid}`);
};

const DynamicParallelQueriesPage = ({ heroids }) => {
  const queryResults = useQueries({
    queries: heroids.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchData(id),
      };
    }),
  });
  console.log({ queryResults });
  return <div>Dynamic Parallel Queries</div>;
};

export default DynamicParallelQueriesPage;
