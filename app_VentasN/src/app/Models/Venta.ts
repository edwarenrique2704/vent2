import { DetalleVenta } from "./DetalleVenta";

export interface Venta{
    idVenta:number,
    fecha_venta:string, //string
    total: number,
    detalleVentas:DetalleVenta[]
}

