import { Routes } from '@angular/router';
import { ProductoComponent } from './Pages/producto/producto.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { VentaComponent } from './Pages/venta/venta.component';
import { RegistrarventaComponent } from './Pages/registrarventa/registrarventa.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';

export const routes: Routes = [

    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'producto/:id',component:ProductoComponent},
    {path:'venta',component:VentaComponent},
    {path:'VentaRequest/RegistrarVenta',component:RegistrarventaComponent},
    {path:'Reporte/ReporteVentas',component:ReporteComponent}
];
