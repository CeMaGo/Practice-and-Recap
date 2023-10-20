import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button />
      <Button />
      <Button />
      <Button />
    </main>
  );
}

function Button({Children}) {
  return (
    <button className="button" type="button">
      {Children}
    </button>
  );
}
