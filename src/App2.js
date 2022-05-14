import "./App.css";
import { useState, useEffect } from "react";
import Results from "./components/result";
import logo from "./medien/Logo.png";
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
    "PLN",
    "CHF",
    "JPY",
    "PLN",
    "CAD",
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

  useEffect(
    (url) => {
      // setData(fetchData(to, from, amount))
      // setData(fetchData('USD', 'EUR', '100'))
      // console.log(url);
      let myHeaders = new Headers();
      myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
      // myHeaders.append("apikey", "API_KEY");

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
    },
    [url]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.amount.value);
    setAmount(e.target.elements.amount.value);
    setFrom(e.target.elements.currIn.value);
    setTo(e.target.elements.currOut.value);
  };

  return (
    <div className="App-parent">
      <div className="App">
        <div id="logo">
          <img src={logo} id="logo" alt="logo" />
        </div>
        <form className="converter-input-form" onSubmit={handleSubmit}>
          <div id="iHave">
            <label htmlFor="amount">Amount</label>
            <input type="numbers" id="amount" name="amount" />
          </div>
          <div id="valuesBox">
            <label htmlFor="curr-in">Which currency do you have?</label>
            <input list="in" id="curr-in" name="currIn" />
            <datalist id="in">
              {currencies.map((currency, index) => {
                return <option key={index} value={currency} />;
              })}
            </datalist>
            <label htmlFor="curr-out">Which do you need?</label>
            <input list="out" id="curr-out" name="currOut" />
            <datalist id="out">
              {currencies.map((currency, index) => {
                return <option key={index} value={currency} />;
              })}
            </datalist>
          </div>
          <div id="btnExchange">
            <button type="submit" className="btn btn-primary">
              Exchange
            </button>
          </div>
        </form>
        <div id="result-field">
          <div>{data && <Results props={data} />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
