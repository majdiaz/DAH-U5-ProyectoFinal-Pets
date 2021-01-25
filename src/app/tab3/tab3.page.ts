import { Component } from '@angular/core';
import { Mascotas } from "../models/mascotas";
import { MascotasService } from "../services/mascotas.service";
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public mascotas: Mascotas[];  
  public ide:string;  
  constructor(private service: MascotasService, private router: Router) {
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

  borrarMascota(){

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
