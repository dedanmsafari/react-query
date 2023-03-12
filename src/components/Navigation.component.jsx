import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div
        style={{
          padding: "30px ",
          marginBottom: "35px",
          backgroundColor: "gray",
          width: "100%",
        }}
      >
        <Link style={{ padding: "20px 55px" }} to="/">
          Home
        </Link>
        <Link style={{ padding: "20px 55px" }} to="/reactquery">
          ReactQuerySuperHeroesPage
        </Link>
        <Link style={{ padding: "20px 55px" }} to="/normalhooks">
          SuperHeroesPage
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
