import { Component, OnInit } from '@angular/core';
import { yellowsubmarine } from './dom2';
import { changuesize} from './tabla';
import {countWords} from './contar';
import {imagen} from './imagen';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.html',
  styleUrls: ['./dom.css'],
})
export class Dom implements OnInit {

  ngOnInit() {
    yellowsubmarine('mayus')
    changuesize('tabla')
    countWords('parragrafo')
    imagen('imagen')
  }
}
