
import './App.css';


function App() {
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
  return (
    <>
      <div>
        <h1>Заголовок 1</h1>
        <p>это параграф</p>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

export default App
