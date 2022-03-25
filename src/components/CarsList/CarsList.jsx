import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { carContext } from "../../Contexts/CarContexts";
import AddCar from "../AddCar/AddCar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GifBoxTwoTone } from "@mui/icons-material";
import "./CarList.css";

const CarsList = () => {
  const [open, setOpen] = useState(false);
  const { cars, getAllCars, deleteCar } = useContext(carContext);
  useEffect(() => {
    getAllCars();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _limit: 3,
      _page: page,
    });
  }, [searchValue, page]);
  useEffect(() => {
    getAllCars();
  }, [searchParams]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="list">
      <div>
        <input
          className="inp"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search...."
        />
        <br />
        <Button
          style={{ marginBottom: "50px" }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Add
        </Button>
        <AddCar open={open} setOpen={setOpen} />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {cars.map((item) => {
          return (
            <Box key={item.id}>
              <Card sx={{ width: 500 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="260"
                  image={item.img}
                />
                <CardContent>
                  <h3>{item.model}</h3>
                  <p>{item.price}</p>
                </CardContent>
                <CardActions>
                  <Box sx={{ margin: "auto" }}>
                    <Button onClick={() => deleteCar(item.id)} size="small">
                      Delete
                    </Button>
                    <Link to={`/edit/${item.id}`}>
                      <Button size="small">Edit</Button>
                    </Link>
                    <Link to={`/details/${item.id}`}>
                      <Button size="small">Details</Button>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
      <Stack spacing={2}>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination
          sx={{ margin: "90px auto" }}
          style={{ textAlign: "center" }}
          count={4}
          // page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default CarsList;
