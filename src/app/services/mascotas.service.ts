import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Mascotas } from "../models/mascotas";

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private firestore: AngularFirestore) { }

  getMascotas(){
    return this.firestore.collection('Mascotas').snapshotChanges();
  }

  createMascota (mascota: Mascotas){
    return this.firestore.collection('Mascotas').add(mascota);
  }

  updateMascota(mascota: Mascotas, id: string){
    this.firestore.doc('Mascotas/'+id).update(mascota);
  }

  deleteMascota( id: string){
    this.firestore.doc('Mascotas/'+id).delete();
 }
}
