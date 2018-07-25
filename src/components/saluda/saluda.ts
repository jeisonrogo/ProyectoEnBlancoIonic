import { Component, Input } from '@angular/core';

/**
 * Generated class for the SaludaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'saluda',
  templateUrl: 'saluda.html'
})
export class SaludaComponent {

  text: string;
  @Input('nombre') nombre : string;

  constructor() {
    console.log('Hello SaludaComponent Component');
  }
  ngOnInit(){
    this.text = 'Hola '+this.nombre;
  }
}
