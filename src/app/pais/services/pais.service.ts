import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams (){
    return new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');

  }

  constructor(private http: HttpClient) { }

  /* trabaja rxjs */

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

   return  this.http.get<Country[]>(url, {params: this.httpParams});      /* vamos a enviar el url */

  }
  /* buscar capital en el servicio */
  buscarCapital(termino: string): Observable<Country[]>
  {
      const url = `${this.apiUrl}/capital/${termino}`;
      return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country>
  {
      const url = `${this.apiUrl}/alpha/${id}`;
      return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{


    const url = `${this.apiUrl}/region/${region}`;
    return  this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
    ;
  }


}
