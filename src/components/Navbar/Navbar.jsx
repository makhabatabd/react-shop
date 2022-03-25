
import React, { useState } from "react";
import ff from "./../assets/ff.png"
import jjj from "./../assets/jjj.png"
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
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
            <div className="fotka">
                 <img style={{width:"200px"}} src={ff} alt=""/>
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
                sx={{ marginLeft: "auto" }}
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
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>

            <Stack direction="row" spacing={2}>
              <Avatar
                alt="j"
                src="https://www.pikpng.com/pngl/m/526-5261512_angelina-jolie-png-transparent-image-angelina-joly-clipart.png"
                sx={{ width: 40, height: 40 , marginRight: "10px", marginLeft: "10px"}} />
            </Stack>



            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
