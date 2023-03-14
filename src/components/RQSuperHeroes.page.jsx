import { useState } from "react";

import UseSuperHeros, { useAddSuperHeroData } from "../hooks/useSuperHeros";
import { Link } from "react-router-dom";

const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setalterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Success fetch ", data);
  };
  const onError = (error) => {
    console.log("Error fetching Data ", error);
  };

  const { mutate: addHero } = useAddSuperHeroData();
  const { data, isError, isInitialLoading, error, isFetching, refetch } =
    UseSuperHeros({ onSuccess, onError });

  const handleClick = () => {
    const addedHero = { name, alterEgo };
    addHero(addedHero);
    setName("");
    setalterEgo("");
  };

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isInitialLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>Super Heroes page</h2>

      <input
        value={name}
        placeholder="hero"
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        value={alterEgo}
        placeholder="alterEgo"
        onChange={(e) => setalterEgo(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Add</button>
      <br />

      <button onClick={() => refetch()}>Fetch</button>
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
