import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: false,

  
})
export class CalculadoraPage implements OnInit {

  items: {
    id: number; ubiA: string; ubiB: string, product: string, quan: string, 
  }[] = [];
  nextId: number = 1;

  constructor() { }

  ngOnInit() {
  }


  addItem(ubiA: string, ubiB: string, product: string, quan: string): void 
  {
    if (ubiA.trim() && ubiB.trim() && product.trim() && quan.trim()) {
      this.items.push({
        id: this.nextId++,
        ubiA: ubiA.trim(),
        ubiB: ubiB.trim(),
        product: product.trim(),
        quan: quan.trim(),
      });
    } else {
      console.error('Todos los espacios deben ser llenados');
    }
  }
}