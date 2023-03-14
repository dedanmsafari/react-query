import UseSuperHeros from "../hooks/useSuperHeros";
import { Link } from "react-router-dom";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Success fetch ", data);
  };
  const onError = (error) => {
    console.log("Error fetching Data ", error);
  };

  const { data, isError, isInitialLoading, error, isFetching, refetch } =
    UseSuperHeros({ onSuccess, onError });

  console.log(isInitialLoading, isFetching);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isInitialLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>Super Heroes page</h2>
      {/* <button onClick={() => refetch()}>Fetch</button> */}
      <div>
        {data ? (
          <>
            {data.data.map((d) => (
              <div key={d.id}>
                <Link to={`/reactquery/${d.id}`}>{d.name}</Link>
              </div>
            ))}
          </>
        ) : (
          <span>Not ready ...</span>
        )}
      </div>
      <div>{isFetching ? "Fetching..." : null}</div>
    </>
  );
};

export default RQSuperHeroesPage;
