import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import GoogleMapReact from "google-map-react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

import clsx from "clsx";
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

const mockData1 = [
  { date: "02-10-2020", sales: 10, cancelled: 2 },
  { date: "03-10-2020", sales: 12, cancelled: 0 },
  { date: "04-10-2020", sales: 38, cancelled: 1 },
  { date: "05-10-2020", sales: 30, cancelled: 3 },
  { date: "06-10-2020", sales: 32, cancelled: 0 },
];

const useStyle = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  card: {
    width: "100%",
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const DriverInfo = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="initial" gutterBottom>
          Driver
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <Box width={300}>
            <Paper>
              <Box p={2}>
                <Grid
                  container
                  spacing={2}
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Avatar className={classes.avatar} />
                  </Grid>
                  <Grid item xs={8} justify="flex-start">
                    <Typography variant="h6" color="initial">
                      Samuel Seibidor
                    </Typography>
                    <Typography variant="body2" color="initial">
                      {"Staff ID: abcdef12345"}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <List>
                <ListItem>
                  <ListItemText
                    primary="Email"
                    secondary="samrythmn@gmail.com"
                  />
                  <ListItemSecondaryAction>
                    <VerifiedUserRoundedIcon />
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary="09022003627" />
                  <ListItemSecondaryAction>
                    <Button variant="text" color="secondary">
                      View Orders
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Paper>
            <Box mt={5}>
              <Typography variant="body2" color="initial" gutterBottom>
                Today
              </Typography>
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body2" color="initial" gutterBottom>
            This week
          </Typography>
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
          <Box mt={5}>
            <Typography variant="body2" color="initial" gutterBottom>
              Monthly
            </Typography>
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
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box height={550} width={1}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAVa67y3wWEBxeAR5Q0p4PZtVknjarOlhQ",
              }}
              defaultCenter={{ lat: 4.8156, lng: 7.0498 }}
              defaultZoom={15}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DriverInfo;
