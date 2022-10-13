const tablaHtml = document.getElementById("tabla2");
updateRows();

function anadeTabla(){
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    tr.appendChild(td);
    const link = document.createElement("a");
    link.setAttribute("href","#")
    const cuatro = document.createTextNode("CUATRO");
    const tbody = document.getElementById("tbody");
    link.appendChild(cuatro);
    td.appendChild(link);
    tbody.appendChild(tr);
    document.getElementById("boton").style.display = "none";
    updateRows();
}

function switchTd(td) {
    if (tablaHtml.nextElementSibling === null) {
        tablaHtml.insertBefore(td,tablaHtml.firstChild);
    }else {
        let nextLine= td.nextElementSibling;
        tablaHtml.removeChild(td.nextElementSibling);
        tablaHtml.insertBefore(nextLine,td);
    }

}

function updateRows() {
    tablaHtml.querySelectorAll("tr").forEach((row) => row.addEventListener("click",()=> switchTd(row)));
} 