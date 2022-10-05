//Apartado A
function deg2rad(grados) {
    event.preventDefault();
    return (grados * Math.PI / 180);
}

function rad2deg(radianes) {
    event.preventDefault();
    return (radianes * 180 / Math.PI).toFixed(2);
}
function EJ11A() {
    event.preventDefault();
    let grados=document.getElementById("gradosA").value;
    let radianes = document.getElementById("radianes").value;
    let gradosARadianes = deg2rad(grados);
    let radianesAGrados = rad2deg(radianes); 
    document.getElementById("EJ11A").innerHTML = grados+"º son: "+gradosARadianes+" radianes.<br>\n"+radianes+" radianes son: "+radianesAGrados+"º";
}

//Apartado B
function sinDeg(grados) {
    let sin = deg2rad(grados);
    let sinRad = Math.sin(sin);
    return sinRad;
}

function cosDeg(grados) {
    let cos = deg2rad(grados);
    let cosRad = Math.cos(cos);
    return cosRad;
}

function EJ11B() {
    event.preventDefault();
    let grados=document.getElementById("gradosB").value;
    let seno = sinDeg(grados);
    let coseno =cosDeg(grados);
    document.getElementById("EJ11B").innerHTML = "Seno de "+grados+": "+seno+"<br>\n Coseno de"+grados+": "+coseno;
}

//Apartado C
function sinDegAlt(grados) {
    let coseno = cosDeg(grados);
    let sin = Math.sqrt(1 - (coseno**2));
    return sin;
}

function cosDegAlt(grados) {
    let coseno;
    let seno= sinDeg(grados);
    let rad = deg2rad(grados);
    if (rad % Math.PI == 0 && (rad/ Math.PI) % 2 != 0){
        coseno = - Math.sqrt(1 - (seno**2));
    } else {
        coseno = Math.sqrt(1 - (seno**2));
    }
    return coseno;
}

function EJ11C() {
    event.preventDefault();
    let grados=document.getElementById("gradosC").value;
    let seno = sinDegAlt(grados);
    let coseno =cosDegAlt(grados);
    document.getElementById("EJ11C").innerHTML = "Seno de "+grados+": "+seno+"<br>\n Coseno de"+grados+": "+coseno;
}