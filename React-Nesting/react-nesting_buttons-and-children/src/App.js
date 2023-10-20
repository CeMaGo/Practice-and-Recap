import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button > Text </Button>
      <Button> Of </Button>
      <Button> My </Button>
      <Button> Choice </Button>
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
