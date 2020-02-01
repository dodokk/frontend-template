import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "./templates/Home";
import BaseWrapper from "./organisms/BaseWrapper";
import history from "../utils/history";

const Pages: React.FC = props => {
  return (
    <Router history={history}>
      <Switch>
        <BaseWrapper>
          <Route exact path="/" component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </BaseWrapper>
      </Switch>
    </Router>
  );
};

export default Pages;
