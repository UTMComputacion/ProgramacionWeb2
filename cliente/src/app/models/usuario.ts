export class Usuario{
    id: number;
    nombre: string;
    tipo: number;
    password:string;
    correo:string;
    constructor() {
    this.id = 0;
    this.nombre = '';
    this.tipo=0;
    this.correo='ingenieria.computacion.utm@gmail.com';
    this.password='prueba';
    }
    }