import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoCumunesComponent } from './pages/no-cumunes/no-cumunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoCumunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
