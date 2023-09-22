const productos = [
  { nombre: "Silla de ruedas", precio: 20000 },
  { nombre: "Eleva inodoro", precio: 15000 },
  { nombre: "Muletas", precio: 10000 },
  { nombre: "Bota Walker", precio: 5000 },
  { nombre: "Bastón de madera", precio: 4000 },
];

function calcularPrecio(producto) {
  const productoEncontrado = productos.find((el) => el.nombre.toLowerCase() === producto.toLowerCase());
  if (productoEncontrado) {
    return productoEncontrado.precio;
  } else {
    return 0;
  }
}

function calcularPrecioConIVA(precio) {
  const precioConIVA = precio * 1.21;
  return precioConIVA;
}

let carrito = [];

while (true) {
  let producto = prompt("Bienvenido a Ortopedia Belgrano, seleccione el producto que desee comprar:" + "\n" + 
  "Silla de ruedas ($20000)" + "\n" + 
  "Eleva inodoro ($15000)" + "\n" +
  "Muletas ($10000)" + "\n" + 
  "Bota Walker ($5000)" + "\n" + 
  "Bastón de madera ($4000)" + "\n" +
  "Para finalizar la compra, escriba 'fin'");

  if (producto.toLowerCase() === "fin") {
    break;
  }

  const precioProducto = calcularPrecio(producto);

  if (precioProducto > 0) {
    const precioConIVA = calcularPrecioConIVA(precioProducto);
    carrito.push({ nombre: producto, precioSinIVA: precioProducto, precioConIVA: precioConIVA });
    alert(producto + " agregado al carrito.");
  } else {
    alert("Ese producto no es correcto, vuelva a ingresar un producto.");
  }
}

function mostrarResumenCompra(carrito) {
  if (carrito.length > 0) {
    const totalSinIVA = carrito.reduce((total, producto) => total + producto.precioSinIVA, 0);
    const totalConIVA = carrito.reduce((total, producto) => total + producto.precioConIVA, 0);
    alert("Resumen de la compra:\n" +
      "Total (sin IVA): $" + totalSinIVA + "\n" +
      "Total (con IVA): $" + totalConIVA);
  } else {
    alert("No ha agregado ningún producto al carrito.");
  }
}

mostrarResumenCompra(carrito);



