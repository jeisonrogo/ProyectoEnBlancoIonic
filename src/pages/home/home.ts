import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  usuarios: any = [
    { 
      nombre: 'Eduardo',
      edad: 41
    },
    { 
      nombre: 'Pedro',
      edad: 28
    },
    { 
      nombre: 'Francisco',
      edad: 34
    },
    { 
      nombre: 'Maria',
      edad: 43
    }
  ]
  constructor(public navCtrl: NavController) {
    
    
  }
 
}