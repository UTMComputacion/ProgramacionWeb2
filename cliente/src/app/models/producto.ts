export class Producto{
    id?:number;
    nombre:string;
    precio:number;
    cantidad:number;
    descripcion?:string;
    idCategoria?:number;
    constructor() {
        this.nombre = '';
        this.precio=18;
        this.cantidad=3;


        }
}