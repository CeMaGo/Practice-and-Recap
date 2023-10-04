import React from "react";
import "./styles.css";

export default function App() {
  return <Button 
          color="blue" 
          text="click me" 
          disabled={!true}
        ></Button>;
}

function Button({ color, disabled, text }){
  const buttonStyle= {
    backgroundColor:color,
    padding:'10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: disabled ? 'not allowed' : 'pointer'
  }
  return (
    <button style={buttonStyle}
    disabled={disabled}>
    {text}
    </button>
  )
}