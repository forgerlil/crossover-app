import './App.css';
import { useState, useEffect } from 'react'
import fetchData from './components/API-fetch';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(fetchData('USD', 'EUR', '100'))
  }, [])

  return (
    data &&
    <div className="App">
      {console.log(data)}
      The crossover one-day app will be here soon!
    </div>
  );
}

export default App;
