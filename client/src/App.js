import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Admin from "./components/pages/Admin";
import ErrorPage from "./components/pages/Error";

class App extends Component {

  state = {
    product: []
  };

  componentDidMount() {
    // call api for the first time after page load and show homepage
    this.getProducts();
  }

  getProducts = () => {
    console.log("1");
    // call api to get three random users and save in state
    axios.get("/home").then((res) => {
      this.setState({
        product: res.data
      }); console.log(this.state.product)
    });
  };

  // deleteProduct = () => {
  //   // call api to get three random users and save in state
  //   axios.delete("/product/:upc").then((res) => {
  //     this.setState({
  //       product: res.data
  //     });
  //   });
  // };

  saveProduct = (item) => {
    console.log(item);
    axios.post("/admin", {
      title: item.productName,
      authors: item.authors,
      description: item.description,
      image: item.image,
      link: item.link
    });

    // get all products
    this.getProducts();
  };

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/home" render={(props) => <Home {...props} data={this.state.product}/>}/>
        <Route exact path="/product/:UPC" component={Product} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/*"  component={ErrorPage} /> 
        </Switch>  
      </Router>
    );
  }
}

export default App;
