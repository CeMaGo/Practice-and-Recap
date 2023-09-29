import Card from "./components/Card";


export default function App() {
  
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow'
    },
    {
      id: 1338,
      name: '🍒 Cherry',
      color: 'red'
    },
    {
      id: 1339,
      name: '🥝 Kiwi',
      color: 'green',
    },
    {
      id: 1340,
      name: '🫐 Blueberry',
      color: 'blue',
    },
    {
      id: 1341,
      name: '🍑 Peach',
      color:'peach',
    },
    {
      id: 1342,
      name: '🍊 Orange',
      color: 'orange',
    },
  ];
  
  return (
    <div className="app">
    {fruits.map(({id, name, color}) => (
      <Card key={id} name={name} color={color} />
    ))}
    </div>
  );
}
