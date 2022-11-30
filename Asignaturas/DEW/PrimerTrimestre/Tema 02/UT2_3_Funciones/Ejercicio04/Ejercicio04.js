function EJ04A() {
    event.preventDefault();
    /*let result = 1, arg1, arg2, res1, res2;
    while (result > 0) {
        arg1 = Math.random() - 0.5;
        if (arg1 < 0) {
            continue;
        }
        res1 = Math.sqrt(arg1);
        arg2 = Math.random();
        if (arg1+arg2 == 0) {
            break;
        }
        res2 = res1 / (arg1 + arg2);
        result = res1 + res2;
        console.log(result);
    }*/
    document.getElementById("EJ04A").innerHTML = "let result = 1, arg1, arg2, res1, res2; </br> while (result > 0) { </br> arg1 = Math.random() - 0.5; </br> if (arg1 < 0) { </br> continue; </br> } </br> res1 = Math.sqrt(arg1); </br> arg2 = Math.random(); </br> if (arg1+arg2 == 0) { </br> break; </br> } </br> res2 = res1 / (arg1 + arg2); </br> result = res1 + res2; </br> console.log(result); </br> }";
}
function EJ04B() {
    event.preventDefault();
    document.getElementById("EJ04B").innerHTML = "let result = 1, arg1, arg2, res1, res2; </br> while (result > 0) { </br> arg1 = Math.random() - 0.5; </br> if (arg1 < 0) { </br> res1 = Math.sqrt(arg1); </br> arg2 = Math.random(); </br> if (arg1+arg2 == 0) { </br> res2 = res1 / (arg1 + arg2); </br> result = res1 + res2;}}</br> console.log(result);}";
}

function EJ04C() {
    event.preventDefault();
    document.getElementById("EJ04C").innerHTML = "while (1 > 0) { </br> let arg1 = Math.random() - 0.5; </br> let res1 = Math.sqrt(arg1); </br> let arg2 = Math.random(); </br> let res2 = res1 / (arg1 + arg2); </br> let result = res1 + res2;</br> console.log(result);}";
}