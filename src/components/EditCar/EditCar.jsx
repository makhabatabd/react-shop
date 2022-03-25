import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { carContext } from "../../Contexts/CarContexts";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const EditCar = () => {
  const { getOneCar, oneCar, updateCar } = useContext(carContext);
  const [edit, setEdit] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneCar(params.id);
  }, []);
  useEffect(() => {
    setEdit(oneCar);
  }, [oneCar]);
  function handleValue(e) {
    let editCar = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(editCar);
  }
  function save() {
    updateCar(edit);
    navigate("/");
  }
  return edit ? (
    <div style={{ marginTop: "150px", textAlign: "center" }}>
      <input
        value={edit.model}
        onChange={handleValue}
        name="model"
        type="text"
        style={{ width: "150px", height: "20px" }}
      />
      <input
        value={edit.img}
        onChange={handleValue}
        name="img"
        type="text"
        style={{ width: "250px", height: "20px" }}
      />
      <input
        value={edit.price}
        onChange={handleValue}
        name="price"
        type="text"
        style={{ width: "150px", height: "20px" }}
      />
      <input
        type="text"
        value={edit.details}
        name="details"
        onChange={handleValue}
        style={{ width: "250px", height: "20px" }}
      />
      <button onClick={save}>Save</button>
    </div>
  ) : (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default EditCar;
