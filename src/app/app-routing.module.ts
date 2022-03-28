import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes =[
    {
        path: 'profile',
        loadChildren: () => import('./folders/profile-folder/profile-folder.module').then(m => m.ProfileFolderModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./folders/contact/app-contact.module').then(m => m.ContactRoutingModule)
    },
    {
        path: 'repository',
        loadChildren: () => import('./folders/repository/repository.module').then(m => m.RepositoryModule)
    },
    {
        path: 'technologies',
        loadChildren: () => import('./folders/tecnologia/tecnologia.module').then(m => m.TecnologiaModule)
    },
    {
        path: 'contribution',
        loadChildren: () => import('./folders/contribution/contribution.module').then(m => m.ContributionModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }