import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";
import Navbar from "./components/navbar";
import Cart from "./components/Cart/cart";
import Default from "./components/default";
import Details from "./components/details";
import ProductList from "./components/productlist";
import Modal from "./components/modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        {/*This is for home page to be similar with productlist-->
          exact is added so that in specific page specific things are displayed;
          Remember the partial matching concept of ROUTER
        */}
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}
export default App;
