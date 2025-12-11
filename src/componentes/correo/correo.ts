import { Component } from '@angular/core';

@Component({
  selector: 'app-correo',
  imports: [],
  templateUrl: './correo.html',
  styleUrl: './correo.css',
})
export class Correo {
  correu: any;
  correu2: any;
  numeros: number;
  correos: any[];
  leidos: any;
  noleidos: number;
  numeros2: number;
  constructor() {
    this.correos = [];
    this.correu = {
        titol: "Practica Neil",
        cos: "Correo cuerpo",
        emisor: "Neil Yerard Garcia Colque",
        destinatario: "Adria tregon",
        leido: true
    }
    this.correu2 = {
      titol: "Practica Neil",
      cos: "Correo cuerpo",
      emisor: "Neil Yerard Garcia Colque",
      destinatario: "Adria tregon",
      leido: false
    };

    this.correos.push(this.correu);
    this.correos.push(this.correu2);

    function contar(text:string): number {
      let numeros = text.length;
      return numeros
    }
    this.numeros = contar(this.correu.titol)

    this.noleidos = 0;
    this.leidos = 0;
    for(let x of this.correos){
      if (x.leido == true){
        this.noleidos = this.noleidos + 1;
      }
      else {
        this.leidos = this.leidos + 1;
      }
    }
    this.numeros2 = 0;

  }
  aumentarletres() {
    this.numeros2++;
  }
}
