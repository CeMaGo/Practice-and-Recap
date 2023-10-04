import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {return  alert('You clicked the Button!')}

  return <Button 
          color="blue" 
          text="click me" 
          disabled={!true}
          onClick={handleClick}
        ></Button>;
}


// blueprint, think of it as a blueprint or a struct, rather general building part, functionality can be assigned later when actually i  use
function Button({ color, disabled, text, onClick}){
  return (
    <button 
            onClick={onClick}
            style={{backgroundColor:color,
                    padding:'10px 20px' ,
                    border: 'none',
                    borderRadius: '5px',
                    cursor: disabled ? 'not allowed' : 'pointer'}}
            disabled={disabled}
            >
        {text}
    </button>
  )
}
