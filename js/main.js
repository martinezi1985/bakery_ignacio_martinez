let ingreso = parseInt(prompt("Ingresa el número de la promoción que buscas (del 1 al 4)"));
let promocion1 = 1;
let promocion2 = 2;
let promocion3 = 3;
let promocion4 = 4;

if (ingreso == 1) {
    alert("Elegiste la promoción 1");
} else if (ingreso == 2) {
    alert("Elegiste la promoción 2");
} else if (ingreso == 3) {
    alert("Elegiste la promoción 3");
} else if (ingreso == 4) {
    alert("Elegiste la promoción 4");
}
else {
    alert("Error, debes elegir del 1 al 4 para obtener dicha promoción");
}