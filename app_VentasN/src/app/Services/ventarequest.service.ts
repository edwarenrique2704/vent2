import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appsettings } from '../Settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class VentaRequestService {
   // private apiUrl:string = appsettings.apiUrl + "Venta";
    private apiUrl = 'http://localhost:5169/api/VentaRequest';

  constructor(private http: HttpClient) {}

  RegistrarVenta(fecha_venta: string, id_producto: number, cant: number): Observable<number> {
    
    const body = { fecha_venta, id_producto, cant };

   
    return this.http.post<number>(`${this.apiUrl}/RegistrarVenta`, body);
  }
}
