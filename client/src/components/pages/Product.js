import React from "react";

function Product(props) {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        {props.Product}
      </p>
    </div>
  );
}

export default Product;
