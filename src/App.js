import "./App.scss";
import Header from "./components/Header";
import Meme from "./components/Meme";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Container
      sx={{
        maxWidth: { xs: "100%", sm: 600 },
      }}
    >
      <CssBaseline />
      <Header />
      <Meme />
    </Container>
  );
}

export default App;
