import { useEffect, useState } from "react";
import './App.css';

import { RefComponents } from "./components/RefComponent";

function App() {
  
  const [data, setData] = useState([]);
      const [count, setCount] = useState(0);
      const [loading, setIsLoading] = useState(true);

      useEffect(() => {
        const fetchData = async() => {
          try {
            const response = await fetch(
              'https://jsonplaceholder.typicode.com/posts'
            );
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error(error.message);
          } finally {
            setIsLoading(false);
          }
        };

        fetchData();
      }, [count]);

      if (loading) {
        return <div>Загрузка...</div>
      };

      return(
        <>
          <RefComponents />
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </>
  )
}

export default App
