import { Component, Input, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias'
import { ListaNoticias } from 'src/app/interfaces/noticias'

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  @Input()
  noticias:Noticias;
  constructor() { 
    this.noticias={
      id:0,
      idCategoria:0,
      titulo:'',
      autor:'',
      fecha:'',
      imagen:'',
      texto:'',
    }
  }
  


  ngOnInit(): void {
  }

}
