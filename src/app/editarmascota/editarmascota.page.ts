import { Component, OnInit } from '@angular/core';
import { Mascotas } from "../models/mascotas";
import { MascotasService } from "../services/mascotas.service";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-editarmascota',
  templateUrl: './editarmascota.page.html',
  styleUrls: ['./editarmascota.page.scss'],
})
export class EditarmascotaPage implements OnInit {
  public myForm:FormGroup;
  public mascota:Mascotas;
  
  
  constructor(private mascotaService:MascotasService,private actroute: ActivatedRoute, 
              private fb:FormBuilder, private router: Router, private toastController: ToastController) { 

      this.actroute.queryParams.subscribe(
        params => {
          if(params && params.special){
            this.mascota= JSON.parse(params.special) as Mascotas;
            console.log(this.mascota);
                    
          }
          }
          );

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

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/tabs/tab3']);
  }

  update(m: Mascotas){
    if(this.myForm.controls.nombre.value!=""){
      m.nombre=this.myForm.controls.nombre.value;
    }
    if(this.myForm.controls.especie.value!=""){
    m.especie=this.myForm.controls.especie.value;
    }
    if(this.myForm.controls.raza.value!=""){
      m.raza=this.myForm.controls.raza.value;
    }
    if(this.myForm.controls.sexo.value!=""){
      m.sexo=this.myForm.controls.sexo.value;
    }
    if(this.myForm.controls.edad.value!=""){
      m.edad=this.myForm.controls.edad.value;
    }
    if(this.myForm.controls.descripcion.value!=""){
      m.descripcion=this.myForm.controls.descripcion.value;
    }
    if(this.myForm.controls.enlace.value!=""){
      m.enlace=this.myForm.controls.enlace.value;  
    }                
    this.mascotaService.updateMascota(m, m.id);

    this.presentToastE();
  }

  async presentToastE(){
    const toast = await this.toastController.create({
      message: 'Datos editados.',
      duration: 3000
    });
    toast.present();
  }

}
