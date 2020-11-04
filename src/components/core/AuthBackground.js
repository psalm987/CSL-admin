import React from "react";
import Box from "@material-ui/core/Box";
import red from "@material-ui/core/colors/red";

const AuthBackground = () => {
  return (
    <Box
      flexGrow={2}
      style={{
        backgroundColor: red[700],
      }}
      height={1}
    />
  );
};

export default AuthBackground;
