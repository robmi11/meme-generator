import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Meme = () => {
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/24y43o.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  const getRandomMemeImg = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMemes((prevState) => {
      return {
        ...prevState,
        randomImg: allMemeImages[randomNumber].url,
      };
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMemes((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <Box component="form" mt={5}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            size="small"
            label="Meme Top Text"
            name="topText"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TextField
            size="small"
            label="Meme Bottom Text"
            name="bottomText"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} mt={2} width="100%">
          <Button
            variant="contained"
            sx={{
              display: "block",
              width: "100%",
              background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
              height: { xs: 60, sm: "auto" },
            }}
            onClick={getRandomMemeImg}
          >
            Get a new meme image
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <img src={memes.randomImg} className="img" />
          <Typography
            component="h4"
            variant="h3"
            sx={{
              position: "absolute",
              top: 30,
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "2px 0px 4px #fff",
            }}
          >
            {memes.topText}
          </Typography>
          <Typography
            component="h4"
            variant="h3"
            sx={{
              position: "absolute",
              bottom: 30,
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "2px 0px 4px #fff",
            }}
          >
            {memes.bottomText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Meme;
