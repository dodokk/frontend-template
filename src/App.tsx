import * as React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from "react-router-dom";

import Home from "./pages/Home";
import BaseWrapper from "./components/Base/BaseWrapper";

type Props = RouteComponentProps<{}>; // for history

const App: React.FC<Props> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <BaseWrapper>
          <Route exact path="/" component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </BaseWrapper>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
