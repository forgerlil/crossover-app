import './App.css';
import { useState, useEffect } from 'react'
import fetchData from './components/API-fetch';
import Footer from './components/footer';

function App(props) {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData(fetchData('USD', 'EUR', '100'))
  }, [])
  return (
    data &&
    <div className="App">
      {console.log(data)}
      The crossover one-day app will be here soon!
      <Footer logoApi={props.logoApi} logoGithub={props.logoGithub} />
    </div>
  );
}

export default App;
