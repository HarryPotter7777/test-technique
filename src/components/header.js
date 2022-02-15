import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { appBar } from "../style";

function Header(props) {
  const { classes } = props;
  return (
    <header>
      <AppBar position="relative" className={classes.center}>
        <Toolbar> Redux test made with ❤️ </Toolbar>
      </AppBar>
    </header>
  );
}

export default withStyles(appBar)(Header);