import React, { useState } from "react";
import { Link } from "react-router-dom";
import ff from "./../assets/ff.png";
import "./Navbar.css";
import {
  AppBar,
  Avatar,
  Button,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./../Drawer/Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const [email, setEmail] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [realEmail, setRealEmail] = useState("jolie");
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  function signIn() {
    if (email === realEmail) {
      setIsLogIn(true);
    } else if (!email) {
      alert("Fill in");
    } else {
      alert("Wrong account! Try again!");
    }
  }
  function logOut() {
    alert("Are you sure you want to log out?");
    setIsLogIn(false);
    setEmail("");
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Link
          to="/"
          style={{ color: "white", margin: "8px", fontSize: "18px" }}
        >
          HomePage
        </Link>
        <Toolbar>
          <div className="fotka">
            <img style={{ width: "200px" }} src={ff} alt="" />
          </div>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              {isLogIn ? (
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="j"
                    src="https://www.pikpng.com/pngl/m/526-5261512_angelina-jolie-png-transparent-image-angelina-joly-clipart.png"
                    sx={{
                      width: 40,
                      height: 40,
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  />
                  <h3 style={{ margin: "10px 0 0 0" }}>{email}</h3>
                  <Button onClick={logOut} variant="contained">
                    Log out
                  </Button>
                </Stack>
              ) : (
                <>
                  <input
                    style={{ height: "30px" }}
                    value={email}
                    placeholder="Write your account"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={signIn} variant="contained">
                    Login
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
