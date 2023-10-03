import "./Tag.css";

const  builtClassName = (tag)=> {
  let className = "tag";
  if (tag === "admin") {
    className += " tag--highlight";
  }
  return className;
}

export default function Tag({ tag }) {
  
  const className = builtClassName(tag);

  return <li className={className}>{tag}</li>;
}
