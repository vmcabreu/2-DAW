/**
Realiza un script que permita añadir tantos números a un select como el usuario le pase. Mayores o iguales a 1.
 */

function aniadirSelect(){
   let select = document.getElementById('select');
   let option = document.createElement("option");
   option.text = document.getElementById("numero").value;
   select.add(option);
}