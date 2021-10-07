import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './page/Page';

const Root = () => {
  return (
    <Switch>
      <Route exact path={'/:pageId'}>
        <Page />
      </Route>
    </Switch>
  );
};

const Client = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

export default Client;
