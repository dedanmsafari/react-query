import { useState } from "react";
import UsePaginatedData from "../hooks/usePaginatedData";

const PaginatedQueriesPage = () => {
  const [page, setpage] = useState(1);

  const onSuccess = (data) => {
    console.log("Success fetch ", data);
    console.log(page);
  };
  const onError = (error) => {
    console.log("Error fetching Data ", error);
  };

  const handleNextPage = () => {
    setpage((page) => page + 1);
  };
  const handlePreviousPage = () => {
    setpage((page) => page - 1);
  };

  const { data, error, isError, isInitialLoading, isFetching } =
    UsePaginatedData({
      page,
      onSuccess,
      onError,
    });

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isInitialLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>Super Heroes page</h2>
      <div>
        {data ? (
          <>
            {data.data.map((d) => (
              <div key={d.id}>
                <h2>
                  {d.id} - {d.color}
                </h2>
              </div>
            ))}
          </>
        ) : (
          <span>Not ready..</span>
        )}
      </div>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>

      <button onClick={handleNextPage} disabled={page === 5}>
        Next
      </button>
      <div>{isFetching ? "Fetching " : null}</div>
    </>
  );
};

export default PaginatedQueriesPage;
