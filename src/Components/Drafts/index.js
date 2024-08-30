import * as React from "react";
import { Box, Grid } from "@mui/material";
import Component1 from "./Component1";

export default function Drafts() {
  return (
    <Box>
      <h3>Drafts</h3>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Component1 />
        </Grid>
      </Grid>
    </Box>
  );
}
