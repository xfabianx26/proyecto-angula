import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private paisService: PaisService) { } /* nos va a permitir poder útilizar ese servicio */



  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
  


    /* el observable hace la funcion de una promesa o asyc await */
/* para un observable se dispare tengo que tener subcribe */
    this.paisService.buscarCapital(termino)
    .subscribe( paises => {
     
      this.paises = paises;  /* acá estoy poniendo los valores del servicio */
      


    },(err) => {
  /*     console.log('Error');
      console.log(err); */
      this.hayError = true;
      this.paises = [];

    });


  }
 

}
