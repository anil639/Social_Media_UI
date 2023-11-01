import React from "react";
import Menu from "../Components/Menu";
import ContentFeed from "../Components/ContentFeed/ContentFeed";
import Artists from "../Components/Artists";
import { Container, Grid } from "@mui/material";
const Home = () => {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentFeed />
        </Grid>
        <Grid item xs={12} md={3}>
          <Artists />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
