import "./App.css";
import { useState, useEffect } from "react";
import Results from "./components/result";
// import fetchData from './components/API-fetch';

function App() {
  const [data, setData] = useState(false);
  const [to, setTo] = useState("EUR");
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("100");

  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "AMD",
    "CHF",
    "JPY",
    "PLN",
    "CZK",
    "BRL",
    "AMD",
  ];
  const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
  // const currencyOption = () => {
  //   currencies.map((currency, index) => {
  //     return <option key={index} value={currency} />
  //   })
  // }

  // handleSubmit containing handleChange + setData(fetchData(to, from, amount)
  // remove handleChange function and have the if statements as part of the handleSubmit directly
  // and remove setData

  useEffect(() => {
    // setData(fetchData(to, from, amount))
    // setData(fetchData('USD', 'EUR', '100'))
    console.log(url);
    let myHeaders = new Headers();
    // myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
    myHeaders.append("apikey", "API_KEY");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.amount.value)
    setAmount(e.target.elements.amount.value);
    setFrom(e.target.elements.currIn.value);
    setTo(e.target.elements.currOut.value);
  };

  return (
    <div className="App">
      <form className="converter-input-form" onSubmit={handleSubmit}>
        <input type="text" className="ihave" name="amount" />
        <div id="valuesBox">
          <label htmlFor="curr-in">What you have?</label>
          <input list="in" id="curr-in" name="currIn" />
          <datalist id="in">
            {currencies.map((currency, index) => {
              return <option key={index} value={currency} />;
            })}
          </datalist>
          <label htmlFor="curr-out">What you need?</label>
          <input list="out" id="curr-out" name="currOut" />
          <datalist id="out">
            {currencies.map((currency, index) => {
              return <option key={index} value={currency} />;
            })}
          </datalist>
        </div>
        <button type="submit" className="btn btn-primary">
          Exchange
        </button>
        <input type="text" id="myChange" />
      </form>
      {data && <Results props={data} />}
    </div>
  );
}

export default App;
