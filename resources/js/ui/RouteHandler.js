import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/Home';
import PageUI from './BasedComponent/Layouts/PageUI';
import ProductPage from './Pages/Product';
import AboutPage from './Pages/About';

function RouteHandler() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageUI>
            <HomePage />
          </PageUI>
        </Route>
        {/* --------------------------------- */}
        <Route exact path="/product">
          <PageUI>
            <ProductPage />
          </PageUI>
        </Route>
        {/* --------------------------------- */}
        <Route exact path="/about">
          <PageUI>
            <AboutPage />
          </PageUI>
        </Route>
        {/* --------------------------------- */}
      </Switch>
    </Router >
  );
}


export default RouteHandler;