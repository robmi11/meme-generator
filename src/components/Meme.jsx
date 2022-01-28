import React, { useEffect, useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import memiki from "../data/memesData";
import Typography from "@mui/material/Typography";

import errorImg from "../images/error.jpg";

const Meme = () => {
  useEffect(() => {
    Memy();
  }, []);

  const getRandomNumber = () => Math.floor(Math.random() * 100 - 1);
  const [randomNumber, setRandomNumber] = useState(0);
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [memy, setMemy] = useState();

  const getMemes = () => {
    return axios.get("https://api.imgflip.com/get_memes");
  };

  const Memy = async () => {
    setRandomNumber(getRandomNumber);
    let kiwka = [];
    try {
      const item = await getMemes();
      kiwka.push(item.data.data.memes[randomNumber].url);
      setMemy(kiwka);
    } catch {
      setMemy({ error: "coś poszło nie tak" });
    }
  };

  return (
    <Box component="form" mt={5}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            size="small"
            onChange={(event) => setTextOne(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TextField
            size="small"
            onChange={(event) => setTextTwo(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2} width="100%">
          <Button
            variant="contained"
            sx={{
              display: "block",
              width: "100%",
              background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
            }}
            onClick={Memy}
          >
            Get a new meme image
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ position: "relative" }}>
          {memy && <img src={memy ? memy[0] : errorImg} className="img" />}
          <Typography
            component="h4"
            variant="h3"
            sx={{
              position: "absolute",
              top: 30,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {textOne && textOne.toUpperCase()}
          </Typography>
          <Typography
            component="h4"
            variant="h3"
            sx={{
              position: "absolute",
              bottom: 30,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {textTwo && textTwo.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Meme;
