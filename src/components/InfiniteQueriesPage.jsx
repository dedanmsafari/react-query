import UseInfiniteData from "../hooks/useInfiniteData";
import { Fragment } from "react";
const InfiniteQueriesPage = () => {
  const onSuccess = (data) => {
    console.log("Success fetch ", data);
  };
  const onError = (error) => {
    console.log("Error fetching Data ", error);
  };

  const {
    data,
    error,
    isError,
    isInitialLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = UseInfiniteData({
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
            {data.pages.map((group, i) => {
              return (
                <Fragment key={i}>
                  {group.data.map((color) => (
                    <h2 key={color.id}>
                      {color.id}-{color.color}
                    </h2>
                  ))}
                </Fragment>
              );
            })}
          </>
        ) : (
          <span>Not ready..</span>
        )}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load More..
        </button>
      </div>
      <div>{isFetching && isFetchingNextPage ? "Fetching " : null}</div>
    </>
  );
};

export default InfiniteQueriesPage;
