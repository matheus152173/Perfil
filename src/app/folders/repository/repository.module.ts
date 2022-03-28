import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { RepositoryRoutingModule } from './repository-rounting.module';



@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ],
  exports: [
    RepositoryComponent
  ]
})
export class RepositoryModule { }
