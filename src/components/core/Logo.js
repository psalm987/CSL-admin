import React from "react";

const Logo = (props) => {
  return (
    <img
      alt="logo"
      src="https://images.unsplash.com/photo-1562307534-a03738d2a81a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      height={100}
      width={100}
      {...props}
    />
  );
};

export default Logo;
