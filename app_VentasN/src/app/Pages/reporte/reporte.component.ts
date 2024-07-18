import { Component, NgModule } from '@angular/core';
import { Reporte } from '../../Models/Reporte';
import { ReporteService } from '../../Services/reporte.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { VentaRequestService } from '../../Services/ventarequest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatHeaderCell, MatHeaderRowDef, MatRowDef, MatTable, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ExportExcelService } from '../../Services/export-excel.service';



@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [MatFormField,MatLabel,MatInput,MatIcon,CommonModule,MatButtonModule,FormsModule,MatTable,MatHeaderCell,MatHeaderRowDef,MatRowDef,MatTableModule,MatToolbar],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
// export class ReporteComponent {
//   fechaInicio: string = '';
//   fechaFin: string = '';
//   reportes: Reporte[] = [];
//   public displayedColumns: string[] = ['id_venta', 'nombre', 'precio', 'fecha_venta', 'cant', 'total'];

//   constructor(private reporteService: ReporteService) { }

//   Report(): void {
//     if (this.fechaInicio && this.fechaFin) {
//       this.reporteService.Report(this.fechaInicio, this.fechaFin).subscribe({
//         next: (data) => {
//           console.log("data",data)
//           this.reportes = data;
//         },
//         error: (error) => {
//           console.error('Error al obtener el reporte', error);
//         }
//       });
//     } else {
//       alert('Por favor, selecciona ambas fechas.');
//     }
//   }
// }

export class ReporteComponent {
  fechaInicio: string = '';
  fechaFin: string = '';
  reportes: Reporte[] = [];
  displayedColumns: string[] = ['id_venta', 'nombre', 'precio', 'fecha_venta', 'cant', 'total'];

  constructor(private reporteService: ReporteService, private router:Router,private exportService:ExportExcelService) { }

  obtenerReporte(): void {
    if (this.fechaInicio && this.fechaFin) {
      this.reporteService.obtenerReporte(this.fechaInicio, this.fechaFin).subscribe({
        next: (data) => {
          this.reportes = data;
        },
        error: (error) => {
          console.error('Error al obtener el reporte', error);
        }
      });
    } else {
      alert('Por favor, selecciona ambas fechas.');
    }
  }

  ventas(){
    this.router.navigate(['/venta']);
  }

  RegistrarVenta(){
    this.router.navigate(['/VentaRequest/RegistrarVenta']);
  }
  inicio(){
    this.router.navigate(['/']);
  }
  
  ReporteVenta(){
    this.router.navigate(['/Reporte/ReporteVentas']);
  }
  exportarReporte() {
    const datosReporte = this.reportes
   this.exportService.exportAsExcelFile(datosReporte, 'ReporteVentas');
  }
}