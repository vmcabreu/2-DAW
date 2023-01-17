import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import Conversor from "./Conversor";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Esqueleto() {
  let eleccion1 = "";
  let eleccion2 = "";
  let cantidad = 0;


  const conseguirCantidad = (e) => {
    cantidad = e.target.value;
  };

  function setEleccion(valor) {
    if (eleccion1 == "") {
      eleccion1 = valor;
    } else {
      eleccion2 = valor;
    }
  }

  function seleccionarMoneda(e) {
    const selectedValue = e.target.value;
    if (selectedValue === "Euro") {
      setEleccion(e.target.name, selectedValue);
    } else if (selectedValue === "Dolar") {
      setEleccion(e.target.name, selectedValue);
    } else if (selectedValue === "Yen") {
      setEleccion(e.target.name, selectedValue);
    }
  }

  function conversionMoneda() {
    const conversion = ReactDOM.createRoot(document.getElementById("conversion"));
    conversion.render(
      <React.Fragment>
        <Conversor
          moneda1={eleccion1}
          moneda2={eleccion2}
          cantidad={cantidad}
        />
      </React.Fragment>
    );
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
        <input type="number" onChange={(e)=>conseguirCantidad(e)}/>
        <button onClick={() => conversionMoneda()}>Convertir</button>
      </header>
      <div id="conversion">

      </div>
    </div>
    
  );
}

const esqueleto = Esqueleto();
root.render(esqueleto);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
