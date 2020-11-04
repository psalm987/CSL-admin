import React from "react";
import MUITextField from "@material-ui/core/TextField";

const TextField = (props) => {
  return (
    <div style={{ marginTop: 8, marginBottom: 8, width: "100%" }}>
      <MUITextField variant="outlined" fullWidth {...props} />
    </div>
  );
};

export default TextField;
