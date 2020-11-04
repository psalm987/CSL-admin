import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "../components/form/TextField";
import Logo from "../components/core/Logo";
import AuthBackground from "../components/core/AuthBackground";

import { Link } from "react-router-dom";

const Login = () => {
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
              Sign In
            </Typography>
          </Box>
          <TextField id="outlined-basic" label="Email" required />
          <TextField id="outlined-basic" label="Password" required />
          <Button
            component={Link}
            to="/dashboard/analytics"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Login
          </Button>
          <Typography
            variant="body2"
            color="primary"
            align="right"
            style={{ margin: 8, textDecoration: "none" }}
            component={Link}
            to="/forgot"
          >
            Forgot Password
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          height={0.25}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            align="right"
            style={{ margin: 8, textDecoration: "none" }}
            component={Link}
            to="/register"
          >
            Create an Account
          </Typography>
        </Box>
      </Box>
      <AuthBackground />
    </Box>
  );
};

export default Login;
