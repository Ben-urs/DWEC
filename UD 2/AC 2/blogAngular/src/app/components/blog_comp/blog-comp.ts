import { Component } from '@angular/core';
import { NewInterface } from '../../interfaces/new-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog-comp.html',
  styleUrl: './blog-comp.css',
})

export class BlogComponent {
  // Lista de noticias
  blognew: NewInterface[] = [
    {
      title: 'Segundo atraco con arma de fuego en Torrelavega en apenas 24 horas',
      image: 'https://s2.ppllstatics.com/eldiariomontanes/www/multimedia/2025/11/13/Imagen%20Atraco%20gasolinera%20Torrelavega1-U240219325349wfF-R6x1MHlNe0R3oAKMiL8UR1K-1200x840@Diario%20Montanes.jpg',
      content: 'La Policía Nacional busca a los autores del suceso, que robaron el dinero de la caja y algunos productos comestibles este miércoles por la noche',
      date: '13-11-2025'
    },
    {
      title: 'Gobierno y Ayuntamiento inyectan un millón al Casino, cinco veces más de lo que genera al año',
      image: 'https://s2.ppllstatics.com/eldiariomontanes/www/multimedia/2025/11/12/110323735-kTBE--1200x840@Diario%20Montanes.jpg',
      content: 'Las dos administraciones, dueñas al 50% de la sociedad, pactan una ampliación de capital para evitar su disolución por deudas justo tras externalizar los servicios de juego y restauración',
      date: '13-11-2025'
    }
  ];

  // Objeto vacío para nuevas publicaciones
  nuevaNoticia: NewInterface = {
    title: '',
    image: '',
    content: '',
    date: ''
  };

  // Variable para el mensaje de error
  mensajeError: string = '';

  // Método para agregar una nueva noticia
  new() {
    if (
      this.nuevaNoticia.title.trim() === '' ||
      this.nuevaNoticia.image.trim() === '' ||
      this.nuevaNoticia.content.trim() === '' ||
      this.nuevaNoticia.date.trim() === ''
    ) {
      this.mensajeError = 'Rellena todos los campos para poder publicar la noticia';

      return;
    }

    // Limpia el mensaje y agrega la noticia
    this.mensajeError = '';
    this.blognew.push(this.nuevaNoticia);

    // Reinicia el formulario
    this.nuevaNoticia = {
      title: '',
      image: '',
      content: '',
      date: ''
    };
  }
}

