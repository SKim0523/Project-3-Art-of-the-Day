import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import NavOne from './conponents/NavOne'
// import NavTwo from './conponents/NavTwo'
// import RandomArt from './conponents/RandomArt'
// import RandomArtShow from './conponents/RandomArtShow'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
