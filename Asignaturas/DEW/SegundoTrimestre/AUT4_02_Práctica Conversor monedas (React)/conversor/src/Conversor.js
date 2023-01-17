import logo from "./logo.svg";
import "./App.css";
import React from "react";

function conversionMoneda(moneda1, moneda2, cantidad) {
  let monedaConvertir = 0;
  if (moneda1 == "Euro" && moneda2 == "Dolar") {
    monedaConvertir = (Number(cantidad) * 0.9) / 1;
  } else if (moneda1 == "Euro" && moneda2 == "Yen") {
    monedaConvertir = (Number(cantidad) * 138) / 1;
  } else if (moneda1 == "Dolar" && moneda2 == "Euro") {
    monedaConvertir = Number(cantidad) / 0.9;
  } else if (moneda1 == "Dolar" && moneda2 == "Yen") {
    monedaConvertir = (Number(cantidad) * 138) / 0.9;
  } else if (moneda1 == "Yen" && moneda2 == "Dolar") {
    monedaConvertir = (Number(cantidad) * 0.9) / 138;
  } else if (moneda1 == "Yen" && moneda2 == "Euro") {
    monedaConvertir = Number(cantidad) / 138;
  } else {
    monedaConvertir = Number(cantidad);
  }
  return monedaConvertir;
}

class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneda1: props.moneda1,
      moneda2: props.moneda2,
      cantidad: props.cantidad,
    };
  }

  render() {
    return (
      <div>
        <p>
          {this.conversionMoneda}
          La conversión de {this.state.cantidad} {this.state.moneda1} son{" "}
          {conversionMoneda(
            this.state.moneda1,
            this.state.moneda2,
            this.state.cantidad
          )}{" "}
          {this.state.moneda2}
        </p>
      </div>
    );
  }
}

export default Conversor;
