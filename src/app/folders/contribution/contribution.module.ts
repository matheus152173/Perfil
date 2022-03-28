import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionComponent } from './contribution.component';
import { ContributionRoutingModule } from './contribution-routing.module';



@NgModule({
  declarations: [
    ContributionComponent
  ],
  imports: [
    CommonModule,
    ContributionRoutingModule
  ],
  exports:[
    ContributionComponent
  ]
})
export class ContributionModule { }
