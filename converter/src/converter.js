import { useEffect, useState } from 'react';

import currenciesList from "./data.js"

import './App.css';

function Converter() {

  // Fonction pour classer les monnaies par ordre alphabétique.
  const currencies = currenciesList.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  const [valueToConvert, setValueToConvert] = useState(0)
  const [valueResult, setValueResult] = useState(0)
  const [currencyToConvert, setCurrencyToConvert] = useState({
      code: "EUR",
      name: "Euro",
      rate: 0.85986854003239,
  })
  const [convertedCurrency, setConvertedCurrency] = useState({
      code: "USD",
      name: "U.S. Dollar",
      rate: 1.0
  })

  // formule de conversion
  const convert = (value, rate, target) => {
    return ((value / rate) * target).toFixed(2)
  }

  // lorsque l'on change la valeur à convertir le résultat de la conversion est automatiquement mis à jour.
  useEffect(() => {
    setValueResult(convert(valueToConvert, currencyToConvert.rate, convertedCurrency.rate))
  }, [valueToConvert, currencyToConvert, convertedCurrency])

  return (
    <div className="Converter">
      <input type="number" value={valueToConvert} onChange={(e) => setValueToConvert(e.target.value)} />
      <select value={currencyToConvert.code} onChange={(e) => setCurrencyToConvert(currencies.find(currency => currency.code === e.target.value))}>
          {currencies.map((currency) => {
              return <option value={currency.code}>{currency.name}</option>
          })}
      </select>
      <div> = </div>
      <select value={convertedCurrency.code} onChange={(e) => setConvertedCurrency(currencies.find(currency => currency.code === e.target.value))}>
          {currencies.map((currency) => {
              return <option value={currency.code}>{currency.name}</option>
          })}
      </select>

      <div> {valueResult} </div>
    </div>
  );
}

export default Converter;