import logo from "./logo.svg";
import "./App.css";
import React from "react";


class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneda1: props.moneda1,
      moneda2: props.moneda2,
      cantidad: props.cantidad,
      conversion: 0,
    };
  }
  shouldComponentUpdate() {
    return true;
  }



  conversionMoneda = () => {
    let monedaConvertir;
    if (this.state.moneda1 == "Euro" && this.state.moneda2 == "Dolar") {
      monedaConvertir = (this.state.cantidad * 0.9) / 1;
    } else if (this.moneda1 == "Euro" && this.moneda2 == "Yen") {
      monedaConvertir = (this.state.cantidad  * 138) / 1;
    } else if (this.moneda1 == "Dolar" && this.moneda2 == "Euro") {
      monedaConvertir = this.state.cantidad  / 0.9;
    } else if (this.moneda1 == "Dolar" && this.moneda2 == "Yen") {
      monedaConvertir = (this.state.cantidad  * 138) / 0.9;
    } else if (this.moneda1 == "Yen" && this.moneda2 == "Dolar") {
      monedaConvertir = (this.state.cantidad  * 0.9) / 138;
    } else if (this.moneda1 == "Yen" && this.moneda2 == "Euro") {
      monedaConvertir = this.state.cantidad  / 138;
    }
    this.setState({ conversion: monedaConvertir });
  };

  render() {
    {this.conversionMoneda}
    return (
      <div>
        <p>
          La conversión de {this.state.cantidad} {this.state.moneda1} son{" "}
          {this.state.conversion} {this.state.moneda2}
        </p>
      </div>
    );
  }
}

export default Conversor;
