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
    <div>
      <div>
        <input
          style={{ marginTop: "10px", width: "290px", marginBottom: "20px" }}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search...."
        />
      </div>
      {cars.map((item) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            key={item.id}
          >
            <div>
              <Card sx={{ width: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.img}
                />
                <CardContent>
                  <h3>{item.model}</h3>
                  <p>{item.price}</p>
                </CardContent>
                <CardActions>
                  <Button onClick={() => deleteCar(item.id)} size="small">
                    Delete
                  </Button>
                  <Link to={`/edit/${item.id}`}>
                    <Button size="small">Edit</Button>
                  </Link>
                  <Link to={`/details/${item.id}`}>
                    <Button size="small">Details</Button>
                  </Link>
                  <Button onClick={() => setOpen(true)}>Add</Button>
                  <AddCar open={open} setOpen={setOpen} />
                </CardActions>
              </Card>
            </div>
          </Box>
        );
      })}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={4} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default CarsList;
