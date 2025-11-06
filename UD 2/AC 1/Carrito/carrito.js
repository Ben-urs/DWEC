export class Carrito {

  constructor() {
    this.productos = new Map();
    this.moneda = "€";
  }

  agregarProducto(producto, cantidad = 1) {
    const existente = this.productos.get(producto.SKU) || { ...producto, unidades: 0 };
    existente.unidades += cantidad;

    if (existente.unidades > 0) {
      this.productos.set(producto.SKU, existente);
    } 
    
    else {
      this.productos.delete(producto.SKU);
    }
  }

  actualizarUnidades(sku, unidades) {
    const producto = this.productos.get(sku);
    
    if (producto) {
      producto.unidades = unidades;

      if (unidades <= 0) {
        this.productos.delete(sku);
      } 
      
      else {
        this.productos.set(sku, producto);
      }
    }
  }

  obtenerCarrito() {
    const productosArray = Array.from(this.productos.values());
    const total = productosArray.reduce((acc, p) => acc + p.price * p.unidades, 0);

    return {
      total: total.toFixed(2),
      moneda: this.moneda,
      productos: productosArray
    };
  }

  vaciarCarrito() {
    this.productos.clear();
  }
}
