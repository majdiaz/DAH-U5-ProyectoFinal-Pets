import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Mascotas } from "../models/mascotas";
import { MascotasService } from "../services/mascotas.service";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { identity } from 'rxjs';

@Component({
  selector: 'app-agregarmascota',
  templateUrl: './agregarmascota.page.html',
  styleUrls: ['./agregarmascota.page.scss'],
})
export class AgregarmascotaPage  {
  
  public myForm:FormGroup;
  public mascota:Mascotas;  
  constructor(private mascotaService:MascotasService, private fb:FormBuilder, private router: Router, private toastController: ToastController) { 
    this.myForm = this.fb.group({            
      nombre: [""],
      especie: [""],
      raza: [""],
      sexo: [""],
      edad: [0],
      descripcion: [""],
      enlace: [""]
    });
  }

  create() {   
    this.mascota = {      
      id: "",
      nombre: this.myForm.controls.nombre.value,          
      especie: this.myForm.controls.especie.value,
      raza: this.myForm.controls.raza.value,
      sexo: this.myForm.controls.sexo.value,
      edad: this.myForm.controls.edad.value,
      descripcion: this.myForm.controls.descripcion.value,
      enlace: this.myForm.controls.enlace.value,
   }
   
   this.mascotaService.createMascota(this.mascota);  
   this.presentToastA();

   
  }

  async presentToastA(){
    const toast = await this.toastController.create({
      message: 'Mascota guardada.',
      duration: 3000
    });
    toast.present();
  }

  volver(){
    this.router.navigate(['/tabs/tab3']);
  }

}
