const precioSilla = 20000;
const precioEleva = 4000;
const precioMuletas = 10000;
const precioBotaWalker = 5000;
const precioBaston = 4000;

let carrito = 0;

function calcularPrecio(producto) {
  switch (producto.toLowerCase()) {
    case "Silla de ruedas":
      return precioSilla;
    case "Muletas":
      return precioMuletas;
    case "Bota walker":
      return precioBotaWalker;
    case "Baston de madera":
      return precioBaston;
    case "Eleva inodoro":
      return precioEleva;
    default:
      return 0; 
  }
}

while (true) {
  let producto = prompt("Bienvenido a Ortopedia Belgrano, seleccione el producto que desee comprar: \nSilla de ruedas ($20000) \nEleva inodoro ($15000) \nMuletas ($10000) \nBota Walker ($5000) \nBastón de madera ($4000) \n Para finalizar la compra, escriba 'fin'");

  if (producto.toLowerCase() === "fin") {
    break;
  }

  const precioProducto = calcularPrecio(producto);

  if (precioProducto > 0) {
    carrito += precioProducto;
    alert(producto + " agregado al carrito.");
  } else {
    alert("Ese producto no es correcto, vuelva a ingresar un producto.");
  }
}

function mostrarResumenCompra(carrito) {
  if (carrito > 0) {
    alert("El total de su compra es: $" + carrito);
  } else {
    alert("No ha agregado ningún producto al carrito.");
  }
}

mostrarResumenCompra(carrito);