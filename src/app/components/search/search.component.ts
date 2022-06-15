import { SpotifyService } from 'src/app/services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  })
export class SearchComponent {

  artistas:any[]=[];
  loading: boolean = false;

  constructor(private spotify:SpotifyService) {}

  
  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtistas(termino)
    .subscribe( (data:any)=>{
      console.log(data);
      this.artistas = data;
      this.loading = false;
    } );
  }
}


