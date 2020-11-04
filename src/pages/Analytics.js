import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  LineSeries,
  BarSeries,
  ScatterSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker, Animation } from "@devexpress/dx-react-chart";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const mockData1 = [
  { date: "02-10-2020", sales: 10, cancelled: 2 },
  { date: "03-10-2020", sales: 12, cancelled: 0 },
  { date: "04-10-2020", sales: 38, cancelled: 1 },
  { date: "05-10-2020", sales: 30, cancelled: 3 },
  { date: "06-10-2020", sales: 32, cancelled: 0 },
];

const Analytics = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="secondary" gutterBottom>
          Welcome Back,
        </Typography>
        <Box width={10} />
        <Typography variant="h5" color="initial" gutterBottom>
          Admin
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="inherit">
            Today
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="inherit">
            This week
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="inherit">
            Monthly
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={clsx([classes.card, classes.primary])}>
            <Box p={2}>
              <Typography variant="h6" color="textPrimary">
                Sales
              </Typography>
              <Box height={30} />
              <Typography variant="body1" color="textSecondary">
                100 deliveries
              </Typography>
              <Typography variant="body1" color="textSecondary">
                2 Cancelled
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card}>
            <Box p={2}>
              <Chart data={mockData1} height={200}>
                <ArgumentAxis /> <ValueAxis />
                <EventTracker /> <Tooltip /> <Animation />
                <LineSeries valueField="sales" argumentField="date" />
                <LineSeries valueField="cancelled" argumentField="date" />
                <ScatterSeries valueField="sales" argumentField="date" />
                <ScatterSeries valueField="cancelled" argumentField="date" />
              </Chart>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card}>
            <Box p={2}>
              <Chart data={mockData1} height={200}>
                <ArgumentAxis /> <ValueAxis />
                <EventTracker /> <Tooltip /> <Animation />
                <BarSeries valueField="sales" argumentField="date" />
                <BarSeries valueField="cancelled" argumentField="date" />
              </Chart>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card}>
            <Box p={2}>
              <Typography variant="h6" color="secondary">
                Revenue
              </Typography>
              <Box height={30} />
              <Typography variant="body1" color="inherit">
                100 deliveries
              </Typography>
              <Typography variant="body1" color="inherit">
                2 Cancelled
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card}>
            <Box p={2}>
              <Chart data={mockData1} height={200}>
                <ArgumentAxis /> <ValueAxis />
                <EventTracker /> <Tooltip /> <Animation />
                <LineSeries valueField="sales" argumentField="date" />
                <LineSeries valueField="cancelled" argumentField="date" />
                <ScatterSeries valueField="sales" argumentField="date" />
                <ScatterSeries valueField="cancelled" argumentField="date" />
              </Chart>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.card}>
            <Box p={2}>
              <Chart data={mockData1} height={200}>
                <ArgumentAxis /> <ValueAxis />
                <EventTracker /> <Tooltip /> <Animation />
                <BarSeries valueField="sales" argumentField="date" />
                <BarSeries valueField="cancelled" argumentField="date" />
              </Chart>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Analytics;
