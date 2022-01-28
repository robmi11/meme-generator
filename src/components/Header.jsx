import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { MyHeader } from "../styles/Header";
import logo from "../images/troll_face.svg";

const Header = () => {
  return (
    <MyHeader>
      <Box sx={{ display: "flex" }}>
        <img src={logo} alt="logo" />
        <Typography
          component="h2"
          sx={{
            marginLeft: "10px",
            fontFamily: "Karla",
            fontWeight: "700",
            fontSize: "1.25rem",
          }}
        >
          Meme Generator
        </Typography>
      </Box>
      <Box>
        <Typography
          component="h4"
          sx={{ fontSize: "0.75rem", fontFamily: "Inter" }}
        >
          React Course - Project 3
        </Typography>
      </Box>
    </MyHeader>
  );
};

export default Header;
