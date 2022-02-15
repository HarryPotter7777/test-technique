import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import NotFound from "../components/not-found";
import User from "../components/user";
import { body } from "../style";
import PublicRoute from "./public";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header";

class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.layout}>
        <Header />
        <BrowserRouter>
          <Switch>
            <PublicRoute component={User} path="/" exact />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const appStyle = withStyles(body)(App);
export default appStyle;
