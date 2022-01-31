import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { MyHeader } from "../styles/Header";
import logo from "../images/troll_face.svg";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 5,
  "@media (min-width: 600px)": {
    fontSize: 20,
    letterSpacing: "normal",
  },
};

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyHeader sx={{ marginTop: { xs: "16px", sm: 0 } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" />
          <Typography
            component="h2"
            variant="h2"
            sx={{
              marginLeft: "10px",
              fontFamily: "Karla",
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
    </ThemeProvider>
  );
};

export default Header;
