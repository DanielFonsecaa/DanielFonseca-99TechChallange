import "./App.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const currencyImg = {
  BLUR: "/tokens/BLUR.svg",
  bNEO: "/tokens/bNEO.svg",
  BUSD: "/tokens/BUSD.svg",
  USD: "/tokens/USD.svg",
  ETH: "/tokens/ETH.svg",
  GMX: "/tokens/GMX.svg",
  STEVMOS: "/tokens/STEVMOS.svg",
  LUNA: "/tokens/LUNA.svg",
  RATOM: "/tokens/RATOM.svg",
  STRD: "/tokens/STRD.svg",
  EVMOS: "/tokens/EVMOS.svg",
  IBCX: "/tokens/IBCX.svg",
  IRIS: "/tokens/IRIS.svg",
  ampLUNA: "/tokens/ampLUNA.svg",
  KUJI: "/tokens/KUJI.svg",
  STOSMO: "/tokens/STOSMO.svg",
  USDC: "/tokens/USDC",
  axlUSDC: "/tokens/axlUSDC.svg",
  ATOM: "/tokens/ATOM.svg",
  STATOM: "/tokens/STATOM.svg",
  OSMO: "/tokens/OSMO.svg",
  rSWTH: "/tokens/rSWTH.svg",
  STLUNA: "/tokens/STLUNA.svg",
  LSI: "/tokens/LSI.svg",
  OKB: "/tokens/OKB.svg",
  OKT: "/tokens/OKT.svg",
  SWTH: "/tokens/SWTH.svg",
  USDC: "/tokens/USDC.svg",
  WBTC: "/tokens/WBTC.svg",
  wstETH: "/tokens/wstETH.svg",
  YieldUS: "/tokens/YieldUS.svg",
  ZIL: "/tokens/ZIL.svg",
};

function App() {
  //the currency list
  const [currencies, setCurrencies] = useState([]);
  //all the currencies objects with price and name
  const [currenciesData, setCurrenciesData] = useState([]);
  //the price of the currency to convert from
  const [priceFrom, setPriceFrom] = useState([]);
  //the price of currency to convert
  const [priceTo, setPriceTo] = useState([]);
  //the amount he will choos to convert from
  const [amount, setAmount] = useState(0);
  //the selected currency
  const [token, setToken] = useState("");
  //the selected currency to convert
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
      console.log(data);
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
  //funciton where will be invoked when submit, and will have the formula to convert
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      //formula to convert is
      // amount to receive = (selected amounted * price of the selected currency) / price of the currency you will receive
      // amount to receive = amountB    //// amount you put = amountA
      // price of the selected = priceA //// price of the currency you will receive = priceB
      // so amountB = (amountA * priceA) / priceB

      const result = (amount * priceFrom) / priceTo;
      setMessage(`Conversion Successful! You will receive ${result}`);
    }, 2000);
  };

  //function that will set the price and the currency you choose
  const handleFirstTokenAndPrice = (event) => {
    const selectedCurrency = event.target.value;
    setToken(selectedCurrency);
    const priceOfCurrency = currenciesData.find(
      (item) => item.currency === selectedCurrency
    );
    if (priceOfCurrency) setPriceFrom(priceOfCurrency.price);
  };

  //function that will set the price and the currency you will receive
  const handleSecondTokenAndPrice = (event) => {
    const selectedCurrency = event.target.value;
    setRetrieveToken(selectedCurrency);
    const priceOfCurrency = currenciesData.find(
      (item) => item.currency === selectedCurrency
    );
    if (priceOfCurrency) setPriceTo(priceOfCurrency.price);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency converter</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="amount-div">
            <h4 className="amount-title">Amount </h4>
            <input
              type="number"
              value={amount}
              onChange={(elem) => setAmount(elem.target.value)}
              placeholder="Choose an Amount"
              className="amount-input"
            />
          </div>

          <div className="from-outer-div">
            <h4 className="from-title">From</h4>
            <div className="from-inner-div">
              <select
                value={token}
                onChange={handleFirstTokenAndPrice}
                className="selectFrom"
              >
                <option value="" className="optionFrom">
                  From
                </option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency} className="">
                    {currency}
                  </option>
                ))}
              </select>
              <img src={currencyImg[token]} alt={token} className="imgFrom" />
            </div>

            {/*<p className="priceFrom">Price: {priceFrom}</p>*/}
          </div>
          <button className="change-place">
            <FontAwesomeIcon
              icon={faRightLeft}
              className="fontAwesomeIcon"
              size="2xl"
            />
          </button>

          <div className="to-outer-div">
            <h4 className="to-title">To</h4>
            <div className="to-inner-div">
              <select
                value={retriveToken}
                onChange={handleSecondTokenAndPrice}
                className="selectTo"
              >
                <option value="" className="optionTo">
                  To
                </option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <img
                src={currencyImg[retriveToken]}
                alt={retriveToken}
                className="imgTo"
              />
            </div>
            {/*<p>Price: {priceTo}</p>*/}
          </div>

          <button
            onClick={handleFetch}
            disabled={!retriveToken || !token || !amount}
            className="buttonMakeConversion"
          >
            Swap
          </button>
          <p>{message}</p>
        </form>
      </header>
      <h2>Hire me please</h2>
    </div>
  );
}

export default App;
