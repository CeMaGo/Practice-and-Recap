import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={5}/>;
}

function Sum({valueA, valueB}) {
  return (
  <div>`{valueA} + {valueB} = {valueA + valueB}</div>
  )
}