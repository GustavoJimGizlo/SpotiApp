import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKEN_fETrqqR9sIFNzotjHfHksqL_qcCwaNdoJKPr_r3cAlBOvfwnigRtxm4MCJY1a_ga3NKEYoWCpWn03C5ui7dQy72XOFnwDs7jhI5uP_IfnhPkN'
    });

    return this.http.get(url, {headers});
  }

  

  getNewRealeases(){

   
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data:any) => data.albums.items));
  

  }

  getArtistas(termino:string){
    
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-US%2Ces-419%3Bq%3D0.9%2Ces%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=15`)
    .pipe(map((data:any) => data.artists.items));
  }

  getArtista(id:string){
    
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data:any) => data.artists.items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map((data:any) => data['tracks']));
  }

  }
