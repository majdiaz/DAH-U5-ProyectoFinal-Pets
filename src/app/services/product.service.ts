import { Injectable } from '@angular/core';
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [];

  constructor() { 
    this.products.push({
      name: 'Asuntól jabón',
      photo: 'https://www.disvetsi.mx/wp-content/uploads/2016/12/Asuntol-Jabon.jpg',
      description: 'Jabón ectoparasiticida. (Uso tópico.), El efecto ectoparasiticida del Asuntol jabón se manifiesta rápidamente',
      price: 69,
      cant: 1
    });

    this.products.push({
      name: 'Correa para perro',
      photo: 'https://cdn.shopify.com/s/files/1/0185/9786/products/40233-Just-a-Cinch-GraniteGray-WEB_c445aab1-f983-4ddf-b670-118c2d956e2f_1800x1200.jpg?v=1569122061',
      description: 'Correa Estilo Cincho no Requiere Collar, la correa Just-a-Cinch de Ruffwear es fuerte, resistente e inspirada en el alpinismo.',
      price: 950,
      cant: 1
    });

    this.products.push({
      name: 'Casa para gatos',
      photo: 'https://http2.mlstatic.com/D_NQ_NP_979488-MLM44243635915_122020-O.webp',
      description: 'La casita está exelente para un gato de tamaño pequeño o mediano.',
      price: 1300,
      cant: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
