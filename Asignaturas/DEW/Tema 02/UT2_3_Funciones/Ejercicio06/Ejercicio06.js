function EJ06() {
    event.preventDefault();
    let tabla="";
    let numero=[];
    for (let i = 1; i <= 100; i++) {
        if (i%2 == 0) {
            numero[i-1]=i**2;
        } else {
            numero[i-1]=i**3;
        }
        
    }
    for (let index = 0; index < numero.length; index++) {
            console.log(numero[index]);
    }
    document.getElementById("EJ06").innerHTML = "Observe la consola";

}





