import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./welcome/welcome.module').then(m=>m.WelcomeModule)
  }
  ,
  {
    path: 'miqueas-gimenez',
    loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'info',
    loadChildren: ()=> import('./info/info.module').then(m => m.InfoModule)
  },
  {
    path:'not-found',
    loadChildren: ()=> import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
