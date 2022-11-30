function EJ0101(params) {
    event.preventDefault();
    if (2 > (3 +2)) {
        document.getElementById("EJ0101").innerHTML = "Test";
    }
    document.getElementById("EJ0101").innerHTML = "Devuelve false. Ya que (3+2)=5 entonces 2>5 = false";
    
    
}

function EJ0102(params) {
    event.preventDefault();
    document.getElementById("EJ0102").innerHTML = "Devuelve 4.5, ya que suma 1 + 3.5 e ignora el valor false para la suma";
    
    
    
}

function EJ0103(params) {
    event.preventDefault();
    document.getElementById("EJ0103").innerHTML = "Devuelve 6, ya que suma 4 + 2 e ignora el valor true para la multiplicación";
    
    
    
}

function EJ0104(params) {
    event.preventDefault();

    document.getElementById("EJ0104").innerHTML = "Devuelve Infinity, ya que la división de 5/0 no es posible ya que su resultado es infinito";
    

    
}

function EJ0105(params) {
    event.preventDefault();
        document.getElementById("EJ0105").innerHTML = "Devuelve true ya que solo primero compara 10>2 ";

}

function EJ0106(params) {
    event.preventDefault();
    
    
    document.getElementById("EJ0106").innerHTML = "Devuelve true ya que solo compara 15>3 que devuelve true ";
    
}

function EJ0107(params) {
    event.preventDefault();
    
    
    document.getElementById("EJ0107").innerHTML = "Devuelve Uncaught ReferenceError: hola is not defined ya que toma 'hola' como una variable y no esta definida";
    
}

function EJ0108(params) {
    event.preventDefault();
    
    
    document.getElementById("EJ0108").innerHTML = "Devuelve Uncaught SyntaxError: Invalid or unexpected token ya que no puedes dividir un entero entre un string";
    
}

function EJ0109(params) {
    event.preventDefault();
    
    
    document.getElementById("EJ0109").innerHTML = "Devuelve Uncaught ReferenceError: π is not defined ya que toma 'π' como una variable y no esta definida";
    
}