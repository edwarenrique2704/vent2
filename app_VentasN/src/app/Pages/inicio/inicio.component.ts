import { Component, inject } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/Producto';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatHeaderCell, MatHeaderRowDef, MatRowDef, MatTable, } from '@angular/material/table';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,MatTableModule,MatToolbarModule,MatHeaderCell,MatHeaderRowDef,MatRowDef,MatTable],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private productoServicio = inject(ProductoService);
  public listaProductos:Producto[] = [];
  public displayedColumns : string[] = ['nombre','precio','stock','accion'];

  obtenerProductos(){
    this.productoServicio.lista().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listaProductos = data;
        }else{
          console.log('Data is not an array or is empty');
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  constructor(private router:Router){

    this.obtenerProductos();
  }

  nuevo(){
    this.router.navigate(['/producto',0]);
  }

  editar(objeto:Producto){
    console.log("idP",objeto.idProducto)
    this.router.navigate(['/producto',objeto.idProducto ]);
    
  }
  eliminar(objeto:Producto){
    if(confirm("Desea eliminar el producto" + objeto.nombre)){
      this.productoServicio.eliminar(objeto.idProducto ).subscribe({
        next:(data)=>{
          console.log("eli", data)
          if(data.isSuccess){
            this.obtenerProductos();
          }else{
            alert("no se pudo eliminar")
          }
        },
        error:(err)=>{
          console.log(err.message)
        }
      })
    }
  }

  ventas(){
    this.router.navigate(['/venta']);
  }

  RegistrarVenta(){
    this.router.navigate(['/VentaRequest/RegistrarVenta']);
  }

  ReporteVenta(){
    this.router.navigate(['/Reporte/ReporteVentas']);
  }

}
