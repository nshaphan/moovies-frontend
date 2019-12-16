import React from 'react';
import { Route } from 'react-router';
import MainLayout from '../components/layouts/main.layout';
import HomeContainer from '../components/containers/home.container';
import { BrowserRouter } from 'react-router-dom';


export default () => (
  <BrowserRouter>
    <Route path="/">
      <MainLayout>
        <HomeContainer />
      </MainLayout>
    </Route>
  </BrowserRouter>
);
