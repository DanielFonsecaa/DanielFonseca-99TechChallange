import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //the currency list
  const [currencies, setCurrencies] = useState([]);
  //all the currencies objects with price and name
  const [currenciesData, setCurrenciesData] = useState([]);
  //the price of the selected currency
  const [price, setPrice] = useState([]);
  //the amount he will choos to convert
  const [amount, setAmount] = useState(0);
  //the selected currency
  const [token, setToken] = useState("");
  //the selected currency to convert from
  const [retriveToken, setRetrieveToken] = useState("");
  //the message after conversion
  const [message, setMessage] = useState("");

  // fetch the currency list from the API link 99Tech provide
  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://interview.switcheo.com/prices.json"
      );
      const data = await response.json();
      setCurrenciesData(data);
      // will take the currency from each object
      const currenciesNames = data.map((item) => item.currency);
      // unique currencies
      const uniqueCurrencies = [...new Set(currenciesNames)];
      setCurrencies(uniqueCurrencies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setMessage("Conversion Successful!");
    }, 1000);
  };

  const handlePrice = (event) => {
    const selectedCurrency = event.target.value;
    const priceOfCurrency = currenciesData.find(
      (item) => item.currency === selectedCurrency
    );
    if (priceOfCurrency) setPrice(priceOfCurrency.price);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <form className="" onSubmit={handleSubmit}>
          <select
            value={token}
            onChange={(elem) => setToken(elem.target.value)}
          >
            <option value="">From:</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <p>Price: {price}</p>
          <select
            value={retriveToken}
            onChange={(elem) => setRetrieveToken(elem.target.value)}
          >
            <option value="">To:</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(elem) => setAmount(elem.target.value)}
            placeholder="Choose an Amount"
          />
          <button
            onClick={handleFetch}
            disabled={!setRetrieveToken || !setToken || !amount}
          >
            Swap
          </button>
          <p>{message}</p>
        </form>
      </header>
    </div>
  );
}

export default App;
