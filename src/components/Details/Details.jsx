import { margin, width } from "@mui/system";
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
    <div
      style={{
        textAlign: "center",
        width: "70%",
        margin: "120px auto",
      }}
    >
      <h2>Model:{oneCar.model}</h2>
      <h2>Image:{oneCar.img}</h2>
      <h2>Price:{oneCar.price}</h2>
      <h2>Details</h2>
      <h3>{oneCar.details}</h3>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default Details;
