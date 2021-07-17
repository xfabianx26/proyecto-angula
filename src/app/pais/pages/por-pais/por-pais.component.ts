import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{cursor: pointer;}
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { } /* nos va a permitir poder útilizar ese servicio */

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
  


    /* el observable hace la funcion de una promesa o asyc await */
/* para un observable se di spare tengo que tener subcribe */
    this.paisService.buscarPais(termino)
    .subscribe( paises => {
      console.log(paises);
      this.paises = paises;  /* acá estoy poniendo los valores del servicio */
      


    },(err) => {
  /*     console.log('Error');
      console.log(err); */
      this.hayError = true;
      this.paises = [];

    });


  }
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5)
      ,(err) => this.paisesSugeridos = []
      )
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  
  }


}
