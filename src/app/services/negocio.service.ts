import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(private http: HttpClient) {     
    
  }

  public cargar_negocio(cod: string){
    return this.http.get(`https://negocio-8dbfd-default-rtdb.firebaseio.com/Negocio/${cod}.json`);
  }
}
