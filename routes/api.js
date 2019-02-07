const router = require("express").Router();
const Product = require("../models/product.js");
import axios from "axios";


export default {
  search: function(query) {
    return axios.get(`https://www.google.com/books/jsapi.js${query}/titles`);
  }
};


// POST a new product into Mongo DB
router.post("/admin", function(req, res) {
  Product.create(
  req.body

 ).then(function(Product) {
  // We have access to the new users as an argument inside of the callback function
  res.json(Product);
  console.log(Product);
 });

});

// * GET all products that have a quantity greater than zero
router.get("/home", function(req, res) {
  console.log("hello");
  Product.find({}).then(function(product) {
    // We have access to the new users as an argument inside of the callback function
    res.json(product)
   });
}
);

// * GET a single product based on a given UPC code
router.get("/product/:upc", function(req, res) {
  Product.create(
  req.body

 ).then(function(Product) {
  // We have access to the new users as an argument inside of the callback function
  res.json(Product);
  console.log(Product);
 });

});

module.exports = router;