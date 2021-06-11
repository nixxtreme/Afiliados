import { HttpClient } from '@angular/common/http';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  afiliados: any[] = [];
  zonas: any[] = [];
  categorias: any[] = [];

  constructor(private http: HttpClient) {
    this.cargar_afiliados();
    this.cargar_zonas();
    this.cargar_categorias();

  }

  cargar_afiliados() {
    this.http.get('https://negocio-8dbfd-default-rtdb.firebaseio.com/Afiliados.json')
      .subscribe((resp: any) => {
        this.afiliados = resp;
        console.log(this.afiliados);
      });
    console.log("Cargando afiliados");
  }

  cargar_zonas(){
    this.http.get('https://negocio-8dbfd-default-rtdb.firebaseio.com/Zonas.json')
    .subscribe((resp: any) => {
      this.zonas = resp;
      console.log(this.zonas);
    })
    console.log("Cargando zonas");
  }

  cargar_categorias(){
    this.http.get('https://negocio-8dbfd-default-rtdb.firebaseio.com/Categorias.json')
    .subscribe((resp: any) => {
      this.categorias = resp;
      console.log(this.categorias);
    })
    console.log("Cargando categorias");
  }
}
