import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div
        style={{
          padding: "30px ",
          marginBottom: "35px",
          backgroundColor: "royalblue",
          width: "100%",
        }}
      >
        <Link style={{ padding: "20px 10px" }} to="/">
          Home
        </Link>
        <Link style={{ padding: "20px 10px" }} to="/reactquery">
          ReactQuerySuperHeroesPage
        </Link>
        <Link style={{ padding: "20px 10px" }} to="/normalhooks">
          SuperHeroesPage
        </Link>
        <Link style={{ padding: "20px 10px" }} to="/parallelqueries">
          ParallelQueries
        </Link>
        <Link style={{ padding: "20px 10px" }} to="/dynamicparallelqueries">
          DynamicParallelQueries
        </Link>
        <Link style={{ padding: "20px 10px" }} to="/dependentqueries">
          DependentQueries
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
