import "./styles.css";

export default function App() {
  return <Greeting name="alex"/>;
}

export function Greeting({name}) {

  return (
    <h1>Hello, {name}!</h1>
  )

}