import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route
          exact
          path="/contacts/new"
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path="/contacts/:id"
          render={(props) => <Contact {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
