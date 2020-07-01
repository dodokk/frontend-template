// -- basic library --
import * as React from "react";
import history from "../utils/history";

// -- redux library --
import { useSelector } from "react-redux";
import { systemSelector } from "../redux/slices/systemSlice";

// -- external components --
import { Router, Route, Redirect, Switch } from "react-router-dom";
import BaseWrapper from "./components/common/BaseWrapper";
import Home from "./pages/Home";

// -- main component --

const Pages: React.FC = () => {
  // -- redux preparations --
  const systemState = useSelector(systemSelector);

  // -- render part --
  return (
    <Router history={history}>
      <Switch>
        <BaseWrapper>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/yourRoute" component={ YourComponent } /> */}
          <Route path="*">
            <Redirect to={systemState.url} />
          </Route>
        </BaseWrapper>
      </Switch>
    </Router>
  );
};

// -- finally export part --

export default Pages;
