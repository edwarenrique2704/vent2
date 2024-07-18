import { Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { VentaService } from '../../Services/venta.service';
import { Router } from '@angular/router';
import { Venta } from '../../Models/Venta';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [MatToolbarModule,MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent implements OnInit{
  private ventaServicio = inject(VentaService);
  listaVenta: Venta[] = [];
  

  constructor(private router:Router){}  

  
  ngOnInit(): void {
    this.loadSalesHistory();
  }

  loadSalesHistory(): void {
    this.ventaServicio.Historial().subscribe(listaVenta => {
      console.log("lista",listaVenta)
      this.listaVenta = listaVenta;
    });
  }
/*
  registerSale(): void {
    // Example data, replace with actual form data
    const fecha_venta = '2024-07-04';
    const id_producto = 1;
    const cant = 10;

    this.ventaServicio.RegistrarVenta(fecha_venta, id_producto, cant).subscribe(ventaId => {
      console.log("ventaid",ventaId)
      console.log(`Venta registrada con ID: ${ventaId}`);
      this.loadSalesHistory();
    });
  }
*/
  inicio(){
    this.router.navigate(['/']);
  }

  RegistrarVenta(){
    this.router.navigate(['/VentaRequest/RegistrarVenta']);
  }

  ReporteVenta(){
    this.router.navigate(['/Reporte/ReporteVentas']);
  }

}

/*

import { Component, OnInit } from '@angular/core';
import { VentaService } from './venta.service';
import { Sale } from './sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.loadSalesHistory();
  }

  loadSalesHistory(): void {
    this.ventaService.historial().subscribe(sales => {
      this.sales = sales;
    });
  }

  registerSale(): void {
    // Example data, replace with actual form data
    const fecha_venta = '2024-07-04';
    const id_producto = 1;
    const cant = 10;

    this.ventaService.registrarVenta(fecha_venta, id_producto, cant).subscribe(ventaId => {
      console.log(`Venta registrada con ID: ${ventaId}`);
      this.loadSalesHistory();
    });
  }
}


*/