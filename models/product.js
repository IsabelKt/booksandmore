const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", productSchema);

module.exports = Book;