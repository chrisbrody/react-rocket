import React from "react";
import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <div>
      <Button>Click Me {props.txt}</Button>
    </div>
  );
}

export default CustomButton;
