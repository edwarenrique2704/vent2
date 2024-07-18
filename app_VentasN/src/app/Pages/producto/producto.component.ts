import { Component, Input, OnInit, inject } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder,FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/Producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  @Input('id') idProducto! : number;
  private productoServicio = inject(ProductoService);
  public formBuild = inject(FormBuilder);

  public formProducto:FormGroup = this.formBuild.group({
    nombre: [''],
    precio:[0],
    stock:[0]
    
  });

  constructor(private router:Router){}

  ngOnInit(): void {
    if(this.idProducto != 0){
      this.productoServicio.obtener(this.idProducto).subscribe({
        next:(data) =>{
          console.log("dat",data)
          this.formProducto.patchValue({
            nombre: data.nombre,
            precio:data.precio,
            stock:data.stock
            
          })
        },
        error:(err) =>{
          console.log(err.message)
        }
      })
    }
  }

guardar(){
  const objeto : Producto = {
    idProducto : this.idProducto,
    nombre: this.formProducto.value.nombre,
    precio: this.formProducto.value.precio,
    stock:this.formProducto.value.stock
    
  }

  if(this.idProducto == 0){
    this.productoServicio.crear(objeto).subscribe({
      next:(data) =>{
        if(data.isSuccess){
          this.router.navigate(["/"]);
        }else{
          alert("Error al crear")
        }
      },
      error:(err) =>{
        console.log(err.message)
      }
    })
  }else{
    this.productoServicio.editar(objeto).subscribe({
      next:(data) =>{
        console.log("editar",data)
        if(data.isSuccess){
          this.router.navigate(["/"]);
        }else{
          alert("Error al editar")
        }
      },
      error:(err) =>{
        console.log(err.message)
      }
    })
  }


}

volver(){
  this.router.navigate(["/"]);
}


}
