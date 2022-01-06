import React from "react";
import { Router } from "@reach/router";
import Main from "../components/Main/Main";
import Detail from "../components/Detail/Detail";

const Home = () => {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
};

export default Home;
