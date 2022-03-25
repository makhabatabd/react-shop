
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CarsList from "./components/CarsList/CarsList";
import Details from "./components/Details/Details";
import EditCar from "./components/EditCar/EditCar";
import Navbar from "./components/Navbar/Navbar.jsx";
import CarsContextProvider from "./Contexts/CarContexts";

const App = () => {
  return (
    <CarsContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<CarsList />} />
        </Routes>
      </BrowserRouter>
    </CarsContextProvider>
  );
};

export default App;
