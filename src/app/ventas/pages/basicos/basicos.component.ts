import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'ramses';
  nombreUpper: string = 'RAMSES';
  nombreCompleto: string = 'rAmsEs IndAleCio';

  fecha: Date = new Date(); //el día de hoy
  

}
