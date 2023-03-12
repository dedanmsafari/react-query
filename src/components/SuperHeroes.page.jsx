import { useEffect, useState } from "react";
import axios from "axios";

const SuperHeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(" http://localhost:4000/superheroes");
        setHeroes(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>An error has occured</h2>;

  return (
    <>
      <h2>Super Heroes page</h2>
      {heroes.map((h) => (
        <div key={h.id}>{h.name}</div>
      ))}
    </>
  );
};

export default SuperHeroesPage;
