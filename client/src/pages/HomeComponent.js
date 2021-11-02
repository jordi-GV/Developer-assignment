import React from "react";

import AddAdvForm from "../features/advertisments/AddAdvsForm";
import { AdvsList } from "../features/advertisments/AdvsList";



function Home() {
  return (
    <React.Fragment>
      <AddAdvForm />

      <AdvsList />
    </React.Fragment>
  );
}

export default Home;
