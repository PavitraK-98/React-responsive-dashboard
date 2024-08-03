import * as React from "react";
import { Box, Grid } from "@mui/material";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from './CustomerFeedback';

export default function Dashboard() {
  return (
    <Box>
      <h3>Dashboard</h3>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Block1 />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Block2 />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Block3 />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Block4 />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <CustomerFeedback />
        </Grid>
      </Grid>
    </Box>
  );
}
