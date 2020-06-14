import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-reboot.css";

import SponsorshipPage from "./views/SponsorshipPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ApplicationPage from "./views/ApplicationPage";
import NotFound from "./views/NotFound";
import ForgotPasswordPageSend from "./views/ForgotPasswordPageSend";
import ForgotPasswordPageInput from "./views/ForgotPasswordPageInput";
import ForgotPasswordPageChange from "./views/ForgotPasswordPageChange";
import WebsitePage from "./views/WebsitePage";
import DashboardPage from "./views/DashboardPage";
import ConfirmAccountPage from "./views/ConfirmAccountPage"

import "./index.css";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={WebsitePage} />
      <Route path="/sponsor" component={SponsorshipPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/confirmaccount" component={ConfirmAccountPage} />
      <Route path="/forgotpassword" component={ForgotPasswordPageSend} />
      <Route
        path="/forgotpasswordpageinput"
        component={ForgotPasswordPageInput}
      />
      <Route
        path="/forgotpasswordpagechange"
        component={ForgotPasswordPageChange}
      />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/application" component={ApplicationPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
