import React from "react";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Settings from "../../pages/settings/Settings";
import Home from "../../pages/home/Home";
import Single from "../../pages/single/Single";
import Write from "../../pages/write/Write";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../../component/hoc/PrivateRoute";

const Routes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <PrivateRoute path="/write" component={Write} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/single/:id" component={Single} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="*" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
