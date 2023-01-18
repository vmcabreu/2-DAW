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

  function setEleccion(nombre,valor) {
    if (nombre == "moneda1") {
      eleccion1 = valor;
    } else {
      eleccion2 = valor;
    }
    console.log(eleccion1+" "+eleccion2);
  }

  function seleccionarMoneda(e) {
    const selectedValue = e.target.value;
    console.log(selectedValue+" "+e.target.name);
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
          <select name="moneda1" onChange={(e)=>seleccionarMoneda(e)} defaultValue={eleccion1="Euro"}>
            <option name="moneda1" value={"Euro"} >Euro</option>
            <option name="moneda1" value={"Dolar"}>Dolar</option>
            <option name="moneda1" value={"Yen"}>Yen</option>
          </select>
          <label> a </label>
          <select name="moneda2" onChange={(e)=>seleccionarMoneda(e)} defaultValue={eleccion2="Dolar"}>
            <option name="moneda2" value={"Euro"}>Euro</option>
            <option name="moneda2" value={"Dolar"} >Dolar</option>
            <option name="moneda2" value={"Yen"}>Yen</option>
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
