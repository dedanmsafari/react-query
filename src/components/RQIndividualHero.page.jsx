import React from "react";
import useSuperHeroData from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const RQIndividualHeroPage = () => {
  const onSuccess = (data) => {
    console.log("Success fetch ", data);
  };
  const onError = (error) => {
    console.log("Error fetching Data ", error);
  };

  const { heroid } = useParams();

  const { data, isError, isInitialLoading, error } = useSuperHeroData(
    heroid,
    onSuccess,
    onError
  );

  if (isError) {
    <div>An Error has Occured- {error}</div>;
  }
  if (isInitialLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>SuperHero Details</h2>
      <h2>{data?.name}</h2>
      <h3>{data?.alterEgo}</h3>
    </>
  );
};

export default RQIndividualHeroPage;
