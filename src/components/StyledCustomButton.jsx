import React from "react";
import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

const StyledButton = withStyles({
  root: {
    display: "inline-flex!important",
    alignItems: "center!important",
    justifyContent: "center!important",
    height: "44px!important",
    padding: "0 50px!important",
    boxSizing: "border-box!important",
    borderRadius: "0!important",
    background: "#4f25f7!important",
    color: "#fff!important",
    transform: "none!important",
    boxShadow: "6px 6px 0 0 #c7d8ed!important",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#4f42f7!important",
    },
  },
  label: {
    textTransform: "capitalize!important",
  },
})(Button);

function StyledCustomButton(props) {
  return <StyledButton variant="contained">{props.txt}</StyledButton>;
}

export default StyledCustomButton;
