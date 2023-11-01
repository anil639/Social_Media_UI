import React from "react";
import Menu from "../Components/Menu";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Container>
        <Menu />
      </Container>
    </div>
  );
};

export default Home;
