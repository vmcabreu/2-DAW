import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
const conversionFinal = "";

function App() {
  const [Euro, setEuro] = useState(false);
  const [Dolar, setDolar] = useState(false);
  const [Yen, setYen] = useState(false);
  const [eleccion1, setEleccion1] = useState("");
  const [eleccion2, setEleccion2] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [conversionFinal, setConversion] = useState("");

  class Conversion extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <p>
          La conversión de {props.cantidad} {props.eleccion1} + " a " +{" "}
          {props.eleccion2} + " son: " + {props.conversion}
        </p>
      );
    }
  }

  const conseguirCantidad = (e) => {
    setCantidad(e.target.value);
  };

  function setEleccion(nombre, valor) {
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
      setEleccion(e.target.name, selectedValue);
    } else if (selectedValue === "Dolar") {
      setDolar(true);
      setEleccion(e.target.name, selectedValue);
    } else if (selectedValue === "Yen") {
      setYen(true);
      setEleccion(e.target.name, selectedValue);
    }
  }

  function conversionMoneda() {
    if (eleccion1 == "Euro" && eleccion2 == "Dolar") {
      setConversion((cantidad * 0.9) / 1);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    } else if (eleccion1 == "Euro" && eleccion2 == "Yen") {
      setConversion((cantidad * 138) / 1);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    } else if (eleccion1 == "Dolar" && eleccion2 == "Euro") {
      setConversion(cantidad / 0.9);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    } else if (eleccion1 == "Dolar" && eleccion2 == "Yen") {
      setConversion((cantidad * 138) / 0.9);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    } else if (eleccion1 == "Yen" && eleccion2 == "Dolar") {
      setConversion((cantidad * 0.9) / 138);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    } else if (eleccion1 == "Yen" && eleccion2 == "Euro") {
      setConversion(cantidad / 138);
      root.render(
        <Conversion
          cantidad={cantidad}
          eleccion1={eleccion1}
          eleccion2={eleccion2}
          conversion={conversionFinal}
        />
      );
    }
  }

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
        <button onClick={() => conversionMoneda()}>Convertir</button>
        {

        }
      </header>
    </div>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
