import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/topics" exact>
            {/* <Topics /> */}
            <div>Test</div>
          </Route>

          <Route path="/" exact>
            {/* <About /> */}
            <Suspense fallback={<div>Loading..</div>}>
              {/* <Header /> */}
              <Home />
            </Suspense>
          </Route>

          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
