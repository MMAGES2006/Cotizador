import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: false,
})
export class CalculadoraPage implements OnInit {
  origen: string = '';
  destino: string = '';
  producto: string = '';
  cantidadProducto: number = 0;
  precioGasolina: number = 0;
  distancia: number = 0;
  rendimientoTanque: number = 0;
  tarifaConductor: number = 0;
  costoCasetas: number = 0;
  costosAdicionales: number = 0;

  costoGasolina: number = 0;
  costoFinal: number = 0;

  constructor() {}

  ngOnInit() {}

  calcularCosto() {
    this.costoGasolina = (this.distancia / this.rendimientoTanque) * this.precioGasolina;

    const costoTotalTransporte =
      this.costoGasolina + this.tarifaConductor + this.costoCasetas + this.costosAdicionales;

    this.costoFinal = costoTotalTransporte * this.cantidadProducto;
  }
}