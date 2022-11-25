import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [//TODO: IMPORTARLO EN MODULE, tmbn los demas modulos con sus propios routings
  {
    path: '',
    loadChildren: ()=> import('./../app/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '/info',
    loadChildren: ()=> import('./../app/info/info.module').then(m => m.InfoModule)
  },
  {
    path:'not-found',
    loadChildren: ()=> import('./../app/not-found/not-found.module').then(m => m.NotFoundModule)
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
