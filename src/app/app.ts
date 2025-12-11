import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Correo} from '../componentes/correo/correo';
import {Dom} from '../componentes/dom/dom/dom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Correo, Dom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularInici');
  protected readonly Correo = Correo;
}
