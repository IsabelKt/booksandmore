import React from "react";

function Home(props){
  console.log(props);

  let mapProps = props.data.map(item =>{
    return(
      <div>
      <li>
      <strong>Name:</strong> {item.productName}
          </li>
          <li>
            <strong>Description:</strong> {item.description}
          </li>
          <li>
            <strong>Quantity:</strong> {item.quantity}
          </li>
          <li>
            <strong>UPC Code:</strong> {item.UPCcode}
          </li>
          </div>
    )
  })

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
      {mapProps}
        </ul>
    </div>
  );
}

export default Home;
