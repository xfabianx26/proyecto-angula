import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'

})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];
  @Input() i: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
