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
    <div>
      <input
        value={edit.model}
        onChange={handleValue}
        name="model"
        type="text"
      />
      <input value={edit.img} onChange={handleValue} name="img" type="text" />
      <input
        value={edit.price}
        onChange={handleValue}
        name="price"
        type="text"
      />
      <input
        type="text"
        value={edit.details}
        name="details"
        onChange={handleValue}
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
