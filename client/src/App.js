import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams,
} from "react-router-dom";
import LoadingSpinner from './UIElements/LoadingSpinner'
import "./App.css";


const Home = lazy(() => import("./pages/Home/Home"));
const ProductLanding = lazy(() =>
  import("./pages/ProductLanding/ProductLanding")
);
const BrandLanding = lazy(() => import("./pages/BrandLanding/BrandLanding"));

const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {/* <About /> */}
            <Suspense fallback={LoadingSpinner}>
              <Home />
            </Suspense>
          </Route>

          <Route path="/product/:productName" exact>
            <Suspense fallback={LoadingSpinner}>
              <ProductLanding />
            </Suspense>
          </Route>

          <Route path="/brand/:brandName" exact>
            <Suspense fallback={LoadingSpinner}>
              <BrandLanding />
            </Suspense>
          </Route>

          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
