/* let ingreso = parseInt(prompt("Ingresa el número de la promoción que buscas (del 1 al 4)"));
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
} */



/* for (torta = 1; torta <= 5; torta++) {
    
        let torta = parseInt(prompt("Ingrese su torta preferida (Opciones 1 a 5)"));
        let precioTorta = parseFloat(prompt("Ingrese el precio de la torta elegida"));

        alert("Has elegido la torta: " + torta + " y su precio es: $" + precioTorta)
        console.log(torta)
        console.log(precioTorta)
} */

// Integrador

function saludo() {
  alert("Bienvenido a Bakery Sunshine!");
  let nombre = prompt("Ingrese su nombre");

  while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
  }
  return nombre;
}

function listadoProductos() {
  let producto;
  do {
    producto = parseInt(
      prompt("Que torta llevara? \n1)Chocolate\n2)Frutilla\n3)Crema")
    );
  } while (producto !== 1 && producto !== 2 && producto !== 3);

  switch (producto) {
    case 1:
      return "Chocolate";
    case 2:
      return "Frutilla";
    case 3:
      return "Crema";
  }
}

function validarPrecio(nombre) {
  if (nombre === "Chocolate") {
    return 350;
  } else if (nombre === "Frutilla") {
    return 200;
  } else {
    return 220;
  }
}


function cobrar(producto, precio, nombre) {
  alert(
    nombre.toUpperCase() +
      ", usted lleva la siguiente torta :" +
      producto +
      " y su precio es de :$" +
      precio
  );

  let pago = parseInt(prompt("Con cuanto abona ? :"));
  if (pago > precio) {
    alert(" Gracias ! Su vuelto es de $" + (pago - precio));
  } else {
    alert("Saldo insuficiente, por favor deposite más dinero!");
  }

}

let nombreCliente = saludo();
let tortaTipo = listadoProductos();
let precio = validarPrecio(tortaTipo);
cobrar(tortaTipo, precio, nombreCliente);

// Fin integrador





/* saludar ("Bienvenido/a a Bakery Sunshine, Sr/Sra ", ingreso);

function lista (param1, param2, param3, param4, param5) {
    return param1 + " " + param2 + " " + param3 + " " + param4 + " " + param5
}

lista ("Chocolate", "frutilla", "Dulce de leche", "Merengue", "Crema chantilly");

prompt("Elija su torta preferida: " + lista) */