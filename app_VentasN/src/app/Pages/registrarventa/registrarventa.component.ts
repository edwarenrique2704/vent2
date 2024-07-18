import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VentaRequestService } from '../../Services/ventarequest.service';
import { Router } from '@angular/router';
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
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registrarventa',
  standalone: true,
  imports: [MatButtonModule,MatCard,MatCardContent,MatGridListModule,
    MatFormField,MatLabel,MatSelect,MatOption,MatIcon,MatToolbar,ReactiveFormsModule,
    MatError,CommonModule,MatInputModule


  ],
  templateUrl: './registrarventa.component.html',
  styleUrl: './registrarventa.component.css'
})
export class RegistrarventaComponent implements OnInit {
  private ventaService = inject(VentaRequestService);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  ventaForm: FormGroup;

  constructor(private router: Router) {
    this.ventaForm = this.fb.group({
      fecha_venta: ['', Validators.required],
      id_producto: [, [Validators.required, Validators.min(1)]],
      cant: [, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.ventaForm.valid) {
      const { fecha_venta, id_producto, cant } = this.ventaForm.value;
      console.log("Enviando datos:", this.ventaForm.value);
      this.ventaService.RegistrarVenta(fecha_venta, id_producto, cant).subscribe({
        next: ventaId => {
          console.log(`Venta registrada con ID: ${ventaId}`);
          this.snackBar.open('Venta registrada con éxito', 'Cerrar', { duration: 3000 });
          this.ventaForm.reset();
        },
        error: error => {
          console.error('Error al registrar la venta', error);
          this.snackBar.open('Error al registrar la venta', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }

  inicio(){
    this.router.navigate(['/']);
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
