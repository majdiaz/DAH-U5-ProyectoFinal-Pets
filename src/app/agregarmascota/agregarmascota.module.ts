import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarmascotaPageRoutingModule } from './agregarmascota-routing.module';

import { AgregarmascotaPage } from './agregarmascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarmascotaPageRoutingModule
  ],
  declarations: [AgregarmascotaPage]
})
export class AgregarmascotaPageModule {}
