import { Box, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { carContext } from "../../Contexts/CarContexts";

const AddCar = ({ open, setOpen }) => {
  const { addCar } = useContext(carContext);
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    model: "",
    img: "",
    price: "",
    details: "",
  });
  function handleValue(e) {
    let product = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(product);
  }
  function save() {
    if (!newProduct.model || !newProduct.img || !newProduct.price) {
      alert("fill in");
      return;
    }
    addCar(newProduct);
    navigate("/");
    setOpen(false);
  }
  const style = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {setOpen ? (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              type="text"
              value={newProduct.model}
              placeholder="model"
              name="model"
              onChange={handleValue}
              style={{ width: "350px" }}
            />
            <br />
            <input
              type="text"
              value={newProduct.img}
              placeholder="img"
              name="img"
              onChange={handleValue}
              style={{ width: "350px" }}
            />
            <br />
            <input
              type="text"
              value={newProduct.price}
              placeholder="price"
              name="price"
              onChange={handleValue}
              style={{ width: "350px" }}
            />
            <br />
            <input
              type="text"
              value={newProduct.details}
              placeholder="details"
              name="details"
              onChange={handleValue}
              style={{ width: "350px" }}
            />
            <br />
            <button onClick={save}>Add</button>
          </Box>
        </Modal>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default AddCar;
