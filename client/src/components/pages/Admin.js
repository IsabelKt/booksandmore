import React from "react";

function Admin(props) {
return(
      <div className="content">
      <ul>
      <li>
      <strong>Name:</strong> {props.productName}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Quantity:</strong> {props.quantity}
          </li>
          <li>
            <strong>UPC Code:</strong> {props.UPCcode}
          </li>
        </ul>
      </div>
    )
}

export default Admin;
