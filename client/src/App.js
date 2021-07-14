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
  const LoadingSpinner = <div className="vertically-center">Loading..</div>;

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
            <Suspense fallback={LoadingSpinner}>
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
