import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
