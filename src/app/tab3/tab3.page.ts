import { Component } from '@angular/core';
import { Mascotas } from "../models/mascotas";
import { MascotasService } from "../services/mascotas.service";
import { Router, NavigationExtras } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public mascotas: Mascotas[];  
  public ide:string;  
  constructor(private service: MascotasService, private router: Router,private toastController: ToastController) {
    this.service.getMascotas().subscribe(data => {
      this.mascotas = data.map(e => {
        return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as any
        } as Mascotas;
      });
    });
  }
  verMas(m: Mascotas): void {        
    this.ide=m.id;
  }
  verMenos(m: Mascotas): void {        
    this.ide="   ";
  }
  adoptar(mascota: Mascotas){}
  
  agregarMascota(){    
    this.router.navigate(['/agregarmascota']);
  }

  borrarMascota(id: string){
    this.service.deleteMascota(id);
    this.presentToast();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'La mascota ha sido borrada.',
      duration: 3000
    });
    toast.present();
  }

  editarMascota(m: Mascotas){
    let navext: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(m)
      }
    };
    
    this.router.navigate(['/editarmascota'],navext);
  }
}
