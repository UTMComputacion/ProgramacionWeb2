export class Cliente{
    id:number;
    nombre:string;
    edad:number;
    tipoMembresia:number;
    fechaIni:string;
    fechaFin:string;
    sexo:string;
    constructor() {
        this.id = 0;
        this.nombre = '';
        this.edad=18;
        this.tipoMembresia=3;
        this.fechaIni='2023-01-11';
        this.fechaFin='2023-02-11';
        this.sexo='masculino';
        }
}