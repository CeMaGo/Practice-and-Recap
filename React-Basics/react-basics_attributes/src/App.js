import React from "react";
import "./styles.css";

export default function App() {
    return Article();
}

function Article() {
  return( 
  <a className="article">
    <h2 className="article_title"> text of your code</h2>
    <label htmlFor="input">
      <input id="input"></input>
      <a className="article_link" href="https://github.com/CeMaGo"> My GitHub</a>
    </label>
  </a>);
}