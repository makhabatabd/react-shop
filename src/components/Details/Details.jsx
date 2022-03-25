import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { carContext } from "../../Contexts/CarContexts";

const Details = () => {
  const { getOneCar, oneCar } = useContext(carContext);
  const params = useParams();
  useEffect(() => {
    getOneCar(params.id);
  }, []);
  return oneCar ? (
    <>
      <h2>{oneCar.model}</h2>
      <h3>{oneCar.img}</h3>
      <h3>{oneCar.price}</h3>
      <div>Details</div>
      <h4>{oneCar.details}</h4>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Details;
