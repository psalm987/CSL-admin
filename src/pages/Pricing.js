import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

const useStyle = makeStyles((theme) => ({
  distance: {
    flexGrow: 1,
  },
}));

const Pricing = () => {
  const classes = useStyle();
  const pricing = [
    { distance: 6, price: 600 },
    { distance: 11, price: 750 },
    { distance: 15, price: 900 },
    { distance: 20, price: 1000 },
  ];
  const display = (matrix) => (
    <React.Fragment>
      <Box display="flex" flexGrow={1} width={1} mb={2}>
        <Typography
          variant="subtitle1"
          color="initial"
          className={classes.distance}
        >
          Distance (km)
        </Typography>
        <Typography variant="subtitle2" color="initial">
          Price (#)
        </Typography>
      </Box>
      {matrix.map(({ distance, price }, index) => (
        <Box display="flex" flexGrow={1} width={1} key={index}>
          <Typography
            variant="subtitle1"
            color="initial"
            className={classes.distance}
          >
            {distance}
          </Typography>
          <Typography variant="subtitle2" color="initial">
            {price}
          </Typography>
        </Box>
      ))}
      <Box width={1} mt={2} display="flex" justifyContent="flex-end">
        <IconButton>
          <EditRoundedIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="initial" gutterBottom>
          Pricing Matrix
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={<Switch />}
            label="Motorcycle"
            labelPlacement="start"
          />
          <Paper>
            <Box p={2}>{display(pricing)}</Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={<Switch />}
            label="Car"
            labelPlacement="start"
          />
          <Paper>
            <Box p={2}>{display(pricing)}</Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControlLabel
            control={<Switch />}
            label="Minivan"
            labelPlacement="start"
          />
          <Paper>
            <Box p={2}>{display(pricing)}</Box>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Pricing;
