import React from "react";
import "./styles.css";

export default function App() {
  return <Smile />;
}

function Smile({isHappy}) {
  return (
    <div>
    {isHappy ? <span>🥰</span> : <span>😓</span> }
    </div>
  )
}