/**
1.Completar función “marcado” que muestre los id de los inputs checkbox seleccionados.
2. Completar función “seleccion” que seleccione en el input “selection” desde las posiciones “selectIni” hasta “selectFin”.
3. Completar función “validar” que compruebe si el valor del input es apto, si el valor no es apto sustituir el contenido del label con la expresión regular.
 */

function marcado(){
    let respuesta = "";
    for (let i = 0; i < document.forms[0].elements.length; i++) {
        if (document.forms[0].elements[i].checked) {
            respuesta += document.forms[0].elements[i].id
        }
        
    }
    document.getElementById('solucion1').innerHTML = respuesta;
    
}

function seleccion() {
    let inicio = Number(document.getElementById('selectIni').value);
    let final = Number(document.getElementById('selectFin').value);
    const frase = document.getElementById('selection');
    frase.focus();
    frase.setSelectionRange(inicio,final);
}

function validar(){
    
}