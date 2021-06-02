import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import UsersContainer from "../containers/UsersContainer";
import ModifyContainer from "../containers/ModifyUserContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/users" component={UsersContainer} />
        <Route exact path="/user/:id" component={ModifyContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
