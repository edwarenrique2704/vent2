// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Reporte } from '../Models/Reporte';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReporteService {
//   private apiUrl = 'http://localhost:5169/api/Reporte/ReporteVentas'; // Asegúrate de ajustar la URL a tu configuración

//   constructor(private http: HttpClient) { }

//   Report(fechaInicio: string, fechaFin: string): Observable<Reporte[]> {
//     const objeto = { Fecha_inicio: fechaInicio, Fecha_fin: fechaFin };
//     return this.http.post<Reporte[]>(this.apiUrl, objeto);
//   }

// }
  // Report(fechaInicio: string, fechaFin: string):Observable<Reporte[]>{

  //   return this.http.get<Reporte[]>(this.apiUrl);
  // }


  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../Models/Reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'http://localhost:5169/api/Reporte/ReporteVentas'; 

  constructor(private http: HttpClient) { }

  obtenerReporte(fechaInicio: string, fechaFin: string): Observable<Reporte[]> {
    const parametros = { Fecha_inicio: fechaInicio, Fecha_fin: fechaFin };
    return this.http.post<Reporte[]>(this.apiUrl, parametros);
  }
}

