import React from "react";
import { Router } from "@reach/router";
import Main from "../components/Main/Main";
import Detail from "../components/Detail/Detail";
import Update from "../components/Update/Update";

const Home = () => {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
        <Update path="/update/:id" />
      </Router>
    </div>
  );
};

export default Home;
