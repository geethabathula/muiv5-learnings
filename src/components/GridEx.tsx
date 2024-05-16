import { Grid } from "@mui/material";
import React from "react";

function GridEx() {
  return (
    <>
      <Grid container spacing={2} bgcolor={"yellow"}>
        <Grid xs={8}>xs=8</Grid>
        <Grid xs={4}>xs=4</Grid>
        <Grid xs={4}>xs=4</Grid>
        <Grid xs={8}>xs=8</Grid>
      </Grid>
    </>
  );
}

export default GridEx;
