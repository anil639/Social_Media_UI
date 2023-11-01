import React from "react";
import Menu from "../Components/Menu";
import ContentFeed from "../Components/ContentFeed/ContentFeed";
import { Container, Grid } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid item xs={6}>
          <ContentFeed />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};

export default Home;
