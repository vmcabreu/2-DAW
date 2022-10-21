/**Cree una página web donde aparezcan los siguientes botones:
Abrir Ventana: abrirá una ventana de tamaño 400px*400px con la dirección www.google.es. La nueva ventana deberá aparecer centrada en la pantalla.
Cerrar Ventana: deberá cerrar la ventana que se acaba de crear. Si la ventana aún no se ha creado o bien el usuario la cerró, deberá mostrar un error que diga “No hay ventana que cerrar”.
Ampliar: modificará el tamaño de la ventana aumentando tanto el ancho como en 30px. Se mostrará un mensaje de error cuando no se pueda ampliar el alto o el ancho. NOTA: para que funcione este y los siguientes apartados tiene que abrir una ventana en blanco, para ello quite la dirección www.google.es
Reducir: modificará el tamaño de la ventana disminuyendo tanto el ancho como en 30px. Se mostrará un mensaje de error cuando no se pueda reducir el alto o el ancho.
Mover: Ubicará la pantalla en la posición indicada en los cuadros de texto. Los valores tendrán que ser enteros positivos. Antes de mover la nueva pantalla tendrá que comprobar que la nueva posición de la ventana es posible teniendo en cuenta tanto la posición como su alto y ancho y el tamaño de la pantalla.
muestra:*/

let userAgent = navigator.userAgent;
let css = document.createElement('link');
css.rel = "stylesheet";
css.type = "text/css";
if (userAgent.match(/chrome|chromium|crios/i)) {
    css.href = "chrome.css"
    document.getElementsByTagName("head")[0].appendChild(css);
} else if (userAgent.match(/firefox|fxios/i)) {
    css.href = "firefox.css"
    document.getElementsByTagName("head")[0].appendChild(css);
}

let visitCount = Number(localStorage.getItem("page_view"));

function firefox(){
    let pantalla= document.createElement('div');
    let ventana= document.createElement('div');
    let idAtrPantalla=["altoD","anchoD","altoT","anchoT","profColor","resolucionPx"];
    let idAtrVentana=["altoExt","anchoExt","cordX","cordY","visitas"];
    pantalla.id = "pantalla";
    ventana.id= "ventana";
    //Crear un elemento para VEntana y Pantalla

}


document.getElementById("altoD").innerHTML = "Alto disponible: "+screen.availHeight+" px.";
document.getElementById("anchoD").innerHTML = "Ancho disponible: "+screen.availWidth+" px.";
document.getElementById("altoT").innerHTML = "Alto total: "+screen.height+" px.";
document.getElementById("anchoT").innerHTML = "Ancho total: "+screen.width+" px.";
document.getElementById("profColor").innerHTML = "Profundidad de color: "+screen.colorDepth;
document.getElementById("resolucionPx").innerHTML = "Resolución (bits por pixel): "+screen.pixelDepth;

document.getElementById("altoExt").innerHTML = "Alto exterior: "+window.outerHeight+" px.";
document.getElementById("anchoExt").innerHTML = "Ancho exterior: "+window.outerWidth+" px.";
document.getElementById("cordX").innerHTML = "Coordenada X respecto a la pantalla: "+window.screenX+" px.";
document.getElementById("cordY").innerHTML = "Coordenada Y respecto a la pantalla: "+window.screenY+" px.";
document.getElementById("visitas").innerHTML = "Ha visitado: "+visitCount+" páginas";