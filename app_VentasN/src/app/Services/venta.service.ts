import { HttpClient,HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { Venta } from '../Models/Venta';
import { Observable } from 'rxjs';
import { VentaRequest } from '../Models/VentaRequest';
import { ResponseAPI } from '../Models/ResponseApi';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private http = inject(HttpClient);
  private apiUrl:string = appsettings.apiUrl + "Venta";

  constructor() { }

  Historial(){
    return this.http.get<Venta[]>(this.apiUrl);
  }


/*


 crear(objeto:Producto){
    return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  }
*/

/*
  RegistrarVenta(fecha_venta: string, id_producto: number, cant: number):Observable<number>{
    
    const body = { fecha_venta, id_producto, cant };
    return this.http.post<number>(`${this.apiUrl}/RegistrarVenta`,body);

  }
}
  */






  // RegistrarVenta(fecha_venta: string, id_producto: number, cant: number): Observable<number> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const body = { fecha_venta, id_producto, cant };

  //   return this.http.post<number>(`${this.apiUrl}/registrar`, body, { headers });
  // }









  // RegistrarVenta(objeto:VentaRequest){
  //   return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  // }
}



/*

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale.model';


export class VentaService {
  private apiUrl = 'http://localhost:5000/api/venta';

  constructor(private http: HttpClient) { }

  // Method to register a sale
  registrarVenta(fecha_venta: string, id_producto: number, cant: number): Observable<number> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { fecha_venta, id_producto, cant };

    return this.http.post<number>(`${this.apiUrl}/RegistrarVenta`, body, { headers });
  }

  // Method to get the sales history
  historial(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/Historial`);
  }
}

*/