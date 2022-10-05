function EJ13() {
    event.preventDefault();
    let resultado;
    let numeroInput = document.getElementById("numero").value;
    let numeroInputString = "" + document.getElementById("numero").value;
    let numerosString = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    let numero1 = numeroInputString.charAt(0);
    let numero2 = numeroInputString.charAt(1);
    if (numeroInput >= 10) {
        switch (numero1) {
            case "1":
                if (numero2 == "0") {
                    resultado = "diez";
                } else if (numero2 == "0") {
                    resultado = "treinta";
                } else if (numero2 == "1") {
                    resultado = "once";
                } else if (numero2 == "2") {
                    resultado = "doce";
                } else if (numero2 == "3") {
                    resultado = "trece";
                } else if (numero2 == "4") {
                    resultado = "catorce";
                } else if (numero2 == "5") {
                    resultado = "quince";
                } else if (numero2 == "6") {
                    resultado = "dieci" + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "dieci" + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "dieci" + numerosString[7];
                } else {
                    resultado = "dieci" + numerosString[8];
                }
                break;
            case "2":
                if (numero2 == "0") {
                    resultado = "veinte";
                } else if (numero2 == "0") {
                    resultado = "treinta";
                } else if (numero2 == "1") {
                    resultado = "veinti" + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "veinti" + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "veinti" + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "veinti" + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "veinti" + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "veinti" + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "veinti" + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "veinti" + numerosString[7];
                } else {
                    resultado = "veinti" + numerosString[8];
                }
                break;
    
            case "3":
                if (numero2 == "0") {
                    resultado = "treinta";
                } else if (numero2 == "0") {
                    resultado = "treinta";
                } else if (numero2 == "1") {
                    resultado = "treinta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "treinta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "treinta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "treinta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "treinta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "treinta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "treinta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "treinta y " + numerosString[7];
                } else {
                    resultado = "treinta y " + numerosString[8];
                }
                break;
            case "4":
                if (numero2 == "0") {
                    resultado = "cuarenta";
                } else if (numero2 == "1") {
                    resultado = "cuarenta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "cuarenta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "cuarenta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "cuarenta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "cuarenta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "cuarenta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "cuarenta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "cuarenta y " + numerosString[7];
                } else {
                    resultado = "cuarenta y " + numerosString[8];
                }
                break;
            case "5":
                if (numero2 == "0") {
                    resultado = "cincuenta";
                } else if (numero2 == "1") {
                    resultado = "cincuenta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "cincuenta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "cincuenta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "cincuenta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "cincuenta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "cincuenta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "cincuenta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "cincuenta y " + numerosString[7];
                } else {
                    resultado = "cincuenta y " + numerosString[8];
                }
                break;
            case "6":
                if (numero2 == "0") {
                    resultado = "sesenta";
                } else if (numero2 == "1") {
                    resultado = "sesenta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "sesenta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "sesenta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "sesenta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "sesenta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "sesenta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "sesenta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "sesenta y " + numerosString[7];
                } else {
                    resultado = "sesenta y " + numerosString[8];
                }
                break;
            case "7":
                if (numero2 == "0") {
                    resultado = "setenta";
                } else if (numero2 == "1") {
                    resultado = "setenta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "setenta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "setenta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "setenta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "setenta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "setenta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "setenta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "setenta y " + numerosString[7];
                } else {
                    resultado = "setenta y " + numerosString[8];
                }
                break;
            case "8":
                if (numero2 == "0") {
                    resultado = "ochenta";
                } else if (numero2 == "1") {
                    resultado = "ochenta y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "ochenta y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "ochenta y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "ochenta y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "ochenta y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "ochenta y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "ochenta y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "ochenta y " + numerosString[7];
                } else {
                    resultado = "ochenta y " + numerosString[8];
                }
                break;
            case "9":
                if (numero2 == "0") {
                    resultado = "noventa";
                } else if (numero2 == "1") {
                    resultado = "noventa y " + numerosString[0];
                } else if (numero2 == "2") {
                    resultado = "noventa y " + numerosString[1];
                } else if (numero2 == "3") {
                    resultado = "noventa y " + numerosString[2];
                } else if (numero2 == "4") {
                    resultado = "noventa y " + numerosString[3];
                } else if (numero2 == "5") {
                    resultado = "noventa y " + numerosString[4];
                } else if (numero2 == "6") {
                    resultado = "noventa y " + numerosString[5];
                } else if (numero2 == "7") {
                    resultado = "noventa y " + numerosString[6];
                } else if (numero2 == "8") {
                    resultado = "noventa y " + numerosString[7];
                } else {
                    resultado = "noventa y " + numerosString[8];
                }
                break;
    
            default:
                break;
        }
    } else {
        switch (numero1) {
            case "1":
                resultado = numerosString[0];
                break;
            case "2":
                resultado = numerosString[1];
                break;
    
            case "3":
                resultado = numerosString[2];
                break;
            case "4":
                resultado = numerosString[3];
                break;
            case "5":
                resultado = numerosString[4];
                break;
            case "6":
                resultado = numerosString[5];
                break;
            case "7":
                resultado = numerosString[6];
                break;
            case "8":
                resultado = numerosString[7];
                break;
            case "9":
                resultado = numerosString[8];
                break;
    
            default:
                break;
        }
    }



    document.getElementById("EJ13").innerHTML = resultado;
}