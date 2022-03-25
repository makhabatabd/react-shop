
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCar from "./components/AddCar/AddCar";
import CarsList from "./components/CarsList/CarsList";
import Details from "./components/Details/Details";
import EditCar from "./components/EditCar/EditCar";
import CarsContextProvider from "./Contexts/CarContexts";


const App = () => {
  return (
    <CarsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<CarsList />} />
          {/* <Route path="/add" element={<AddCar />} /> */}
        </Routes>
      </BrowserRouter>
    </CarsContextProvider>


  );
};

export default App;