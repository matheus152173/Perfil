import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileFolderComponent } from "./profile-folder.component";

const routes: Routes =[
    {
        path: '',
        component:  ProfileFolderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule{ }