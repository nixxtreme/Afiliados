import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent{


  cod: string = '';
  detallesneg: any = undefined;
  constructor(private neg: NegocioService, private route: ActivatedRoute) { 
    route.params.subscribe( parametros => {
      neg.cargar_negocio(parametros['id']).subscribe( (resp: any) => {
        this.cod = parametros['id'];
        this.detallesneg = resp;
        
      })
      
      
    });
  }
    

}
