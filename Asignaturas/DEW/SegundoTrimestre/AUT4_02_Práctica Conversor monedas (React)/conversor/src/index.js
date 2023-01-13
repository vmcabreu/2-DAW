import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



function App() {
  const [Euro, setEuro] = useState(false);
const [Dolar, setDolar] = useState(false);
const [Yen, setYen] = useState(false);
const [eleccion1,setEleccion1] = useState("");
const [eleccion2,setEleccion2] = useState("");
const [cantidad, setCantidad] = useState(0);
const [conversionFinal, setConversion] = useState("");

const conseguirCantidad = (e) => {
  setCantidad(e.target.value);
};

function setEleccion(nombre,valor) {
  if (nombre == "moneda1") {
    setEleccion1(valor);
  } else {
    setEleccion2(valor);
  }
}

function seleccionarMoneda(e) {
  const selectedValue = e.target.value;
  if (selectedValue === "Euro") {
    setEuro(true);
    setEleccion(e.target.name,selectedValue);
  } else if (selectedValue === "Dolar") {
    setDolar(true);
    setEleccion(e.target.name,selectedValue);
  } else if (selectedValue === "Yen") {
    setYen(true);
    setEleccion(e.target.name,selectedValue);
  }

}

function conversionMoneda() {
  let conversion = 0;
  if (eleccion1 == "Euro" && eleccion2 == "Dolar") {
    conversion = (cantidad * 0.9) / 1;
    return ( conversionFinal =
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  } else if (eleccion1 == "Euro" && eleccion2 == "Yen") {
    conversion = (cantidad * 138) / 1;
    return (conversionFinal =
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  } else if (eleccion1 == "Dolar" && eleccion2 == "Euro") {
    conversion = cantidad / 0.9;
    return (conversionFinal=
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  } else if (eleccion1 == "Dolar" && eleccion2 == "Yen") {
    conversion = (cantidad * 138) / 0.9;
    return (conversionFinal=
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  } else if (eleccion1 == "Yen" && eleccion2 == "Dolar") {
    conversion = (cantidad * 0.9) / 138;
    return (conversionFinal=
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  } else if (eleccion1 == "Yen" && eleccion2 == "Euro") {
    conversion = cantidad / 138;
    return (conversionFinal=
      "La conversión de " +
      cantidad +
      " " +
      eleccion1 +
      " a " +
      eleccion2 +
      " son: " +
      conversion
    );
  }
}
console.log(eleccion1);

  return (
    <div>
      <header>
        <h1>Conversor Moneda</h1>
        <div>
          <label>Convierte de </label>
          <select onChange={seleccionarMoneda}>
            <option name="moneda1">Euro</option>
            <option name="moneda1">Dolar</option>
            <option name="moneda1">Yen</option>
          </select>
          <label> a </label>
          <select onChange={seleccionarMoneda}>
            <option name="moneda2">Euro</option>
            <option name="moneda2">Dolar</option>
            <option name="moneda2">Yen</option>
          </select>
        </div>
        <label>Cantidad: </label>
        <input
          type="number"
          onChange={conseguirCantidad}
          value={cantidad}
        ></input>
        <button onClick={(e) => conversionMoneda()}>Convertir</button>
        <div>
          <p>{conversionFinal}</p>
        </div>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

