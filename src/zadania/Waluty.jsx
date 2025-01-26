import { useState } from "react";

export const Waluty = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRates = {
    EUR: 4.5,
    USD: 4.2,
    GBP: 5.2,
  };

  const handleConvert = () => {
    let rate;
    switch (currency) {
      case "EUR":
        rate = exchangeRates.EUR;
        break;
      case "USD":
        rate = exchangeRates.USD;
        break;
      case "GBP":
        rate = exchangeRates.GBP;
        break;
      default:
        rate = 1;
    }
    setConvertedAmount((amount / rate).toFixed(2));
  };

  return (
    <div >
      <h2>Przelicznik Walut</h2>
      <input
        type="number"
        placeholder="Kwota w PLN"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
      <button
        onClick={handleConvert}
      >
        Przelicz
      </button>
      <h3>Przeliczona kwota: {convertedAmount} {currency}</h3>
    </div>
  );
};
