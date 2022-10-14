/**Cree una página web donde aparezcan los siguientes botones:
Abrir Ventana: abrirá una ventana de tamaño 400px*400px con la dirección www.google.es. La nueva ventana deberá aparecer centrada en la pantalla.
Cerrar Ventana: deberá cerrar la ventana que se acaba de crear. Si la ventana aún no se ha creado o bien el usuario la cerró, deberá mostrar un error que diga “No hay ventana que cerrar”.
Ampliar: modificará el tamaño de la ventana aumentando tanto el ancho como en 30px. Se mostrará un mensaje de error cuando no se pueda ampliar el alto o el ancho. NOTA: para que funcione este y los siguientes apartados tiene que abrir una ventana en blanco, para ello quite la dirección www.google.es
Reducir: modificará el tamaño de la ventana disminuyendo tanto el ancho como en 30px. Se mostrará un mensaje de error cuando no se pueda reducir el alto o el ancho.
Mover: Ubicará la pantalla en la posición indicada en los cuadros de texto. Los valores tendrán que ser enteros positivos. Antes de mover la nueva pantalla tendrá que comprobar que la nueva posición de la ventana es posible teniendo en cuenta tanto la posición como su alto y ancho y el tamaño de la pantalla.
muestra:*/

function abrirVentana() {
    window.resizeTo(400,400);
    window.open("https://www.google.com/");
}