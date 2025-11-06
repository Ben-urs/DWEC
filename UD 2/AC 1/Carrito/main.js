import { Carrito } from "./carrito.js";

document.addEventListener("DOMContentLoaded", () => {
  const cuerpoTabla = document.querySelector(".tableProductos tbody");
  const contenedorDerecha = document.querySelector(".contenedorDerecha");
  const totalFinal = document.querySelector(".totalFinal");

  const carrito = new Carrito();

  // Cargar productos desde JSON
  async function cargarProductos() {
    try {
      const respuesta = await fetch("./productos.json");
      const data = await respuesta.json();

      carrito.moneda = data.currency;

      // Limpia la tabla antes de cargarla
      cuerpoTabla.innerHTML = "";

      data.productos.forEach(function(prod) {
        prod.price = parseFloat(prod.price);
        prod.unidades = 0;
        carrito.agregarProducto(prod, 0);
        crearFilaProducto(prod);
      });

      actualizarTotales();
    } 
    
    catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  }

  // Crear fila de producto en la tabla
  function crearFilaProducto(producto) {
    const fila = document.createElement("tr");

    // Columna Producto
    const colProducto = document.createElement("td");
    colProducto.innerHTML =
      "<strong>" + producto.title + "</strong>" +
      "<p class='text-muted small mb-0'>Ref: " + producto.SKU + "</p>";

    // Columna Cantidad
    const colCantidad = document.createElement("td");
    colCantidad.classList.add("text-center");

    const botonMenos = document.createElement("button");
    botonMenos.className = "btn btn-outline-secondary btn-sm";
    botonMenos.textContent = "-";

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "text";
    inputCantidad.value = producto.unidades;
    inputCantidad.readOnly = true;
    inputCantidad.className = "mx-2 text-center border rounded cantidadInput";
    inputCantidad.style.width = "40px";

    const botonMas = document.createElement("button");
    botonMas.className = "btn btn-outline-secondary btn-sm";
    botonMas.textContent = "+";

    colCantidad.append(botonMenos, inputCantidad, botonMas);

    // Columna Precio
    const colPrecio = document.createElement("td");
    colPrecio.textContent = producto.price.toFixed(2) + carrito.moneda;

    // Columna Total
    const colTotal = document.createElement("td");
    colTotal.classList.add("text-end", "subtotalProducto");
    colTotal.textContent = "0" + carrito.moneda;

    fila.append(colProducto, colCantidad, colPrecio, colTotal);
    cuerpoTabla.appendChild(fila);

    // Contenedor derecho 
    const filaResumen = document.createElement("div");
    filaResumen.classList.add("d-flex", "justify-content-between", "mb-1", "resumenProducto");
    filaResumen.innerHTML =
      "<span>" + producto.title + "</span>" +
      "<span class='subtotalProducto'>0" + carrito.moneda + "</span>";

    contenedorDerecha.insertBefore(filaResumen, contenedorDerecha.querySelector(".cajaFinal"));

    // Funcion para actualizar lods totales
    //function actualizarTotalesProducto() {
      //var totalProd = producto.unidades * producto.price;
      //colTotal.textContent = totalProd.toFixed(2) + carrito.moneda;
      //filaResumen.querySelector(".subtotalProducto").textContent = totalProd.toFixed(2) + carrito.moneda;
      //carrito.actualizarUnidades(producto.SKU, producto.unidades);
      //actualizarTotales();
    //}

    // Eventos botones + -
    //botonMas.addEventListener("click", function() {
    //product.unidades++;
    //  inputCantidad.value = producto.unidades;
    //  actualizarTotalesProducto();
    //});

   // botonMenos.addEventListener("click", function() {
   //   if (producto.unidades > 0) {
   //     product.unidades--;
   //     inputCantidad.value = producto.unidades;
   //     actualizarTotalesProducto();
   //   }
   // });
  }

  // Funcion para actualizar el total del carrito
  function actualizarTotales() {
    var datos = carrito.obtenerCarrito();
    totalFinal.textContent = datos.total + datos.moneda;
  }

  cargarProductos();
});
