import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'agregarmascota',
    loadChildren: () => import('./agregarmascota/agregarmascota.module').then( m => m.AgregarmascotaPageModule)
  },
  {
    path: 'editarmascota',
    loadChildren: () => import('./editarmascota/editarmascota.module').then( m => m.EditarmascotaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
