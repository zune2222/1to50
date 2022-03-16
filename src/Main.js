import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Rank from "./Rank";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const basename = "/1to50/";
const Main = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Route path="/" exact={true} component={App} />
        <Route path="/rank" component={Rank} />
      </div>
    </QueryClientProvider>
  );
};

export default Main;
