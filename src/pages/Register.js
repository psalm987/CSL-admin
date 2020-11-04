import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "../components/form/TextField";
import Logo from "../components/core/Logo";
import AuthBackground from "../components/core/AuthBackground";
import { DatePicker } from "@material-ui/pickers";

import { Link } from "react-router-dom";

const Register = () => {
  const [selectedDate, handleDateChange] = React.useState(null);
  return (
    <Box width={1} display="flex" flexDirection="row" height={1}>
      <Box
        width={800}
        alignItems="center"
        justifyContent="center"
        height={1}
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height={0.25}
        >
          <Logo />
        </Box>
        <Box p={5} m={0} width={0.8}>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h6"
              color="primary"
              alignText="center"
              gutterBottom
            >
              Create an Account
            </Typography>
          </Box>
          <TextField id="outlined-basic" label="Name" />
          <DatePicker
            disableToolbar
            variant="inline"
            inputVariant="outlined"
            label="Birthday"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            views={["month", "date"]}
          />
          <TextField id="outlined-basic" label="Email" />
          <Box display="flex" flexDirection="row">
            <TextField id="outlined-basic" label="Phone" />
            <TextField id="outlined-basic" label="Password" />
          </Box>
          <TextField id="outlined-basic" label="Secret" />
          <Button variant="contained" color="primary" size="large" fullWidth>
            Register
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          height={0.15}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            align="right"
            style={{ margin: 8, textDecoration: "none" }}
            component={Link}
            to="/login"
          >
            Back to Login
          </Typography>
        </Box>
      </Box>
      <AuthBackground />
    </Box>
  );
};

export default Register;
