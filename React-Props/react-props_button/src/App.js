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
 function handleClick() {return  alert('You clicked the Button!')}

  return (
    <button 
            onClick={handleClick}
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
