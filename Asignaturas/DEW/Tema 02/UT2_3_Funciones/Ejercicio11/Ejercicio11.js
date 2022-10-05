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
    let sinRad = Math.sin(grados);
    let sin = rad2deg(sinRad);
    return sin;
}

function cosDeg(grados) {
    let cosRad = Math.cos(grados);
    let cos = rad2deg(cosRad);
    return cos;
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
    let sin = 1 - coseno;
    return sin;
}

function cosDegAlt(grados) {
    let sin = sinDeg(grados);
    let cos = 1 - sin;
    return cos;
}

function EJ11C() {
    event.preventDefault();
    let grados=document.getElementById("gradosC").value;
    let seno = sinDegAlt(grados);
    let coseno =cosDegAlt(grados);
    document.getElementById("EJ11C").innerHTML = "Seno de "+grados+": "+seno+"<br>\n Coseno de"+grados+": "+coseno;
}