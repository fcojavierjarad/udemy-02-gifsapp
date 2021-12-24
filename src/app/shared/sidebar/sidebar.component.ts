import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent {

constructor(private gifsService:GifsService){}

buscar(historial:string){
  console.log(historial);
  this.gifsService.buscarGifs(historial);
}

get historial(){
  return this.gifsService.historial;
}
 

}
