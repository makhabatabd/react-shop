import axios from "axios";
import React, { useReducer, useState } from "react";

export const carContext = React.createContext();
const API = "http://localhost:8000/cars";

const INIT_STATE = {
  cars: [],
  oneCar: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        cars: action.payload.data,
      };
    case "GET_ONE_CAR":
      return {
        ...state,
        oneCar: action.payload,
      };
    default:
      return state;
  }
};

const CarsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getAllCars = async () => {
    let result = await axios.get(API + window.location.search);
    console.log(result);
    dispatch({
      type: "GET_CARS",
      payload: result,
    });
  };
  const addCar = async (newCar) => {
    axios.post(API, newCar);
    getAllCars();
  };
  const deleteCar = async (id) => {
    await axios.delete(`${API}/${id}`);
    getAllCars();
  };
  const getOneCar = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CAR",
      payload: data,
    });
  };
  const updateCar = async (editedCar) => {
    await axios.patch(`${API}/${editedCar.id}`, editedCar);
    getAllCars();
  };

  return (
    <carContext.Provider
      value={{
        cars: state.cars,
        oneCar: state.oneCar,
        getAllCars,
        addCar,
        deleteCar,
        getOneCar,
        updateCar,
      }}
    >
      {children}
    </carContext.Provider>
  );
};
export default CarsContextProvider;
