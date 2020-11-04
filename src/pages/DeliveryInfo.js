import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DirectionsBikeRoundedIcon from "@material-ui/icons/DirectionsBikeRounded";

import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import GoogleMapReact from "google-map-react";
import ReviewTheme from "../components/core/ReviewTheme";

const useStyle = makeStyles((theme) => ({
  distance: {
    // textShadow: "2px 2px 5px #000000",
    color: theme.palette.text.primary,
    position: "relative",
    bottom: "55vh",
    zIndex: 100,
    padding: theme.spacing(2),
  },
}));

const DeliveryInfo = () => {
  const classes = useStyle();
  const { id } = useParams();
  const ModeIcon = DirectionsBikeRoundedIcon;
  const [review, setReview] = React.useState(0);
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" mb={3}>
        <Typography variant="h5" color="initial" gutterBottom>
          Delivery Info
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row">
        <Typography variant="subtitle1" color="initial">
          {"ID: " + id}
        </Typography>
        <Box width={100} />
        <Typography variant="subtitle1" color="initial">
          Mode
        </Typography>
        <Box width={10} />
        <ModeIcon color="primary" />
        <Box width={100} />
        <Typography variant="subtitle1" color="initial">
          {"Price: #2,000"}
        </Typography>
        <Box width={100} />
        <Typography variant="subtitle1" color="initial">
          Status
        </Typography>
        <Box width={10} />
        <Chip label="Processing" color="secondary" />
      </Box>
      <Box height="55vh" my={3}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAVa67y3wWEBxeAR5Q0p4PZtVknjarOlhQ",
          }}
          defaultCenter={{ lat: 4.8156, lng: 7.0498 }}
          defaultZoom={15}
        />
        <Box>
          <Typography
            variant="h4"
            color="textSecondary"
            className={classes.distance}
          >
            5 km
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Button variant="contained" color="secondary">
          Track Order
        </Button>
        <Box display="flex" flexGrow={1} />
        <Typography variant="subtitle2">{"Review:  Not Available"}</Typography>
        <ReviewTheme value={review} setValue={setReview} />
        <Box display="flex" flexGrow={1} />
        <Typography variant="subtitle2"> Client: </Typography>
        <Box width={5} />
        <Typography variant="subtitle2" component={Link} color="textPrimary">
          {" "}
          Samuel Seibidor
        </Typography>
        <Box width={15} />
        <Typography variant="subtitle2"> Driver: </Typography>
        <Box width={5} />
        <Typography variant="subtitle2" component={Link} color="textPrimary">
          {" "}
          Victor Chase
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default DeliveryInfo;
