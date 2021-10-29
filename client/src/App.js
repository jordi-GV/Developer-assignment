import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./pages/MainComponent";


function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
          <Main />
      </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
