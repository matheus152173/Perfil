import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiaComponent } from './tecnologia.component';
import { TechnologieRoutingModule } from './technologies-routing.module';



@NgModule({
  declarations: [
    TecnologiaComponent
  ],
  imports: [
    CommonModule,
    TechnologieRoutingModule
  ],
  exports:[
    TecnologiaComponent
  ]

})
export class TecnologiaModule { }
