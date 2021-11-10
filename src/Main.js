import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Rank from './Rank';
const basename = "/1to50/";
const Main = () => {
  return (
    <div>
      <Route path="/" exact={true} component={App} />
      <Route path="/rank" component={Rank} />
    </div>
  );
};

export default Main;