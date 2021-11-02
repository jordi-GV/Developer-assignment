import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./pages/HeaderComponent";
import About from "./pages/AboutComponent";
import { SingleAdvPage } from "./features/advertisments/SingleAdvPage";
import { EditAdvForm } from "./features/advertisments/EditAdvForm";
import TableAdvs from "./features/advertisments/TableAdevertisements";
import Home from "./pages/HomeComponent";



function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/advs/:advId" component={SingleAdvPage} />
          <Route exact path="/editAdv/:advId" component={EditAdvForm} />
          <Route exact path="/table" component={TableAdvs} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
