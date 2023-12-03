import React, { useState } from "react";
import ReactDOM from "react-dom";

// class Hello extends React.Component{
//   render(){
//     return(<h1>Hi Freinds</h1>)
//   }
// }
const Hello = () => {
  const [hello, setHello] = useState("Hi Freinds");
  return(<h1>{hello}</h1>)
};

export default Hello;
