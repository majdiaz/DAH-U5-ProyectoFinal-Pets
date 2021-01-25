import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmascotaPageRoutingModule } from './editarmascota-routing.module';

import { EditarmascotaPage } from './editarmascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditarmascotaPageRoutingModule
  ],
  declarations: [EditarmascotaPage]
})
export class EditarmascotaPageModule {}
