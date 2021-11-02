import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./pages/HeaderComponent";
import {AdvsList} from './features/advertisments/AdvsList'
import AddAdvForm from "./features/advertisments/AddAdvsForm";
import About from "./pages/AboutComponent";
import { SingleAdvPage } from "./features/advertisments/SingleAdvPage";
import { EditAdvForm } from "./features/advertisments/EditAdvForm";
import TableAdvs from "./features/advertisments/TableAdevertisements";


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddAdvForm/>
                <AdvsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/about" render={() => (
              <React.Fragment>
                <About/>
              </React.Fragment>
            )} />
            <Route exact path="/advs/:advId" component={SingleAdvPage} />
            <Route exact path="/editAdv/:advId" component={EditAdvForm} />
            <Route exact path="/table" component={TableAdvs} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
