import logo from "./logo.svg";
import "./App.css";

function App() {
  const conversion = (moneda1,moneda2,cantidad) => {

  }

  return (
    <div>
      <header className="App-header">
        <h1>Conversor Moneda</h1>
        <div>
        <label>Convierte de </label>
        <select>
          <option selected>Euro</option>
          <option>Dólar</option>
          <option>Yen</option>
        </select>
        <label> a </label>
        <select>
          <option>Euro</option>
          <option selected>Dólar</option>
          <option>Yen</option>
        </select>
        </div>
        <label>Cantidad: </label>
        <input type="number" value="0"></input>
        <button onClick={() => conversion("Goal!")}>Convertir</button>
      </header>
    </div>
  );
}

export default App;
