import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFolderComponent } from './profile-folder.component';
import { ProfileRoutingModule } from './app-profile.module';



@NgModule({
  declarations: [
    ProfileFolderComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports:[
    ProfileFolderComponent
  ]
})
export class ProfileFolderModule { }
