import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarmascotaPage } from './agregarmascota.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarmascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarmascotaPageRoutingModule {}
