import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public veterinarios = [];

  constructor() {
    //consulta remota
    this.veterinarios.push({
      image: 'https://www.consumer.es/wp-content/uploads/2019/07/img_maltrato-animal-frenar-veterinarios3-300x300.jpg',
      title: 'María Flores Cantú',
      subtitle: 'Anestesiología Veterinaria',
      description: 'Usada para la intervención en procedimientos quirúrgicos y el manejo del dolor mediante el conocimiento de técnicas farmacológicas de analgesia en pacientes de diversas especies.',
      active: true,
      contact: 'https://wa.link/m46p9e'
    });

    this.veterinarios.push({
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0mPjXK4IBZQ-KC3YmJzsWTcg436x8LN4uQ&usqp=CAU',
      title: 'Juan Manuel Medin',
      subtitle: 'Cardiología veterinaria',
      description: 'Interpretación de pruebas diagnósticas en cardiología como electrocardiogramas, ecocardiogramas y manejo de tratamientos especializados en éste ámbito.',
      active: true,
      contact: 'https://wa.link/v6731e'
    });

    this.veterinarios.push({
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBJ_Ein40PtYs10rGtPj1h0_VcZroTj-Gfw&usqp=CAU',
      title: 'Marta Ortega Briseño',
      subtitle: 'Cirugía veterinaria',
      description: 'La especialidad de cirugía puede estar enfocada en grandes o en pequeñas especies, ya que la anatomía y el manejo farmacológico varía según la especie a tratar.',
      active: true,
      contact: 'https://wa.link/m46p9e'
    });
    
    this.veterinarios.push({
      image: 'https://oftalvet.com/img/inicio/Inicio%20Consulta%20oftalmologica%20especializada%20opcion2.jpg',
      title: 'Raul Muro',
      subtitle: 'Dermatología veterinaria',
      description: 'Tener dominio de esta especialidad veterinaria permite lograr diagnósticos más acertados y realizar tratamientos eficaces',
      active: true,
      contact: 'https://wa.link/v6731e'
    });
  }

}
