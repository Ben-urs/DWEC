import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog_comp/blog-comp';
import { FooterComponent } from "./components/footer_comp/footer-comp";
import { NavbarComponent } from "./components/navbar_comp/navbar-comp";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BlogComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogAngular');
}
