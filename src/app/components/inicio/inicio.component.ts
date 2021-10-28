import { Component, OnInit } from '@angular/core';
import { ListaNoticias, Noticias } from '../../interfaces/noticias';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nots:Noticias[] = ListaNoticias;
  ListaOtrasNoticias:Noticias[] = [];
  ListaNoticiasDestacadas:Noticias[] = [];

  constructor() { 
  
  }

  ngOnInit(): void {
    this.ListaNoticiasDestacadas = this.NoticiasDestacadas();
    this.ListaOtrasNoticias = this.OtrasNoticias();
  }

  NoticiasDestacadas = ():Noticias[] => {
    let ArrayNoticias:Noticias[] = [];
    this.nots.forEach((object:Noticias)=>{
      if ((object.idCategoria !==0)){ 
        ArrayNoticias.push(object);
      }
    })
  return ArrayNoticias;
  }

  OtrasNoticias = ():Noticias[] => {
    let ArrayNoticias:Noticias[] = [];
    this.nots.forEach((object:Noticias) =>{
      if ((object.idCategoria === 0)){
        ArrayNoticias.push(object);
      }
    })
    return ArrayNoticias;
  }

} 