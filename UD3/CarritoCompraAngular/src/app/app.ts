import { Component, signal } from '@angular/core';
import { ListaProductosIzquierdaComponent } from "./components/prod-tabla-izquierda/prod-tabla-izquierda";
import { DerechaComponent } from "./components/prod-tabla-derecha/prod-tabla-derecha";

@Component({
  selector: 'app-root',
  imports: [ListaProductosIzquierdaComponent, DerechaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('CarritoCompraAngular');
}
