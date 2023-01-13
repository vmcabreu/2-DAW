import "./App.css";
import { useState } from 'react';


function App() {
  const [Euro, setEuro] = useState(false);
  const [Dolar, setDolar] = useState(false);
  const [Yen, setYen] = useState(false);
  const eleccion1 = "";
  const eleccion2 = "";
  const [cantidad, setCantidad] = useState(0);

  const conseguirCantidad= (e) => {
    setCantidad(e.target.value);
  };

  function seleccionarMoneda(e) {
    const selectedValue = e.target.value;
    if (selectedValue === "Euro") {
      setEuro(true);
    } else if (selectedValue === "Dolar") {
      setDolar(true);
    } else if (selectedValue === "Yen") {
      setYen(true);
    }
    if (e.target.name == "moneda1") {
      eleccion1 = selectedValue;
    } else {
      eleccion2 = selectedValue;
    }
  }

  function conversionMoneda() {
    let conversion = 0;
    if (eleccion1 == "Euro" && eleccion2 == "Dolar") {
      conversion = (cantidad * 0.90) / 1;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion;
    } else if (eleccion1 == "Euro" && eleccion2 == "Yen") {
      conversion = (cantidad * 138) / 1;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion;
    } else if (eleccion1 == "Dolar" && eleccion2 == "Euro") {
      conversion = cantidad / 0.90;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion;
    } else if (eleccion1 == "Dolar" && eleccion2 == "Yen") {
      conversion = (cantidad * 138) / 0.90;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion;
    } else if (eleccion1 == "Yen" && eleccion2 == "Dolar") {
      conversion = (cantidad * 0.9) / 138;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion; 
    } else if (eleccion1 == "Yen" && eleccion2 == "Euro") {
      conversion = (cantidad) / 138;
      return "La conversión de "+cantidad+" "+eleccion1+" a "+eleccion2+" son: "+conversion;
    }
  }

  return (
    <div>
      <header className="App-header">
        <h1>Conversor Moneda</h1>
        <div>
          <label>Convierte de </label>
          <select onChange={seleccionarMoneda(e)}>
            <option name="moneda1">{Euro}</option>
            <option name="moneda1">{Dolar}</option>
            <option name="moneda1">{Yen}</option>
          </select>
          <label> a </label>
          <select onChange={seleccionarMoneda(e)}>
            <option name="moneda2">{Euro}</option>
            <option name="moneda2">{Dolar}</option>
            <option name="moneda2">{Yen}</option>
          </select>
        </div>
        <label>Cantidad: </label>
        <input type="number" onChange={conseguirCantidad} value={cantidad}></input>
        <button onClick={(e) => conversionMoneda()}>Convertir</button>
      </header>
    </div>
  );
}

export default App;
