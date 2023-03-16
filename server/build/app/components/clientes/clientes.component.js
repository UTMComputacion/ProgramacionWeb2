"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesComponent = void 0;
const core_1 = require("@angular/core");
const cliente_1 = require("../../models/cliente");
let ClientesComponent = class ClientesComponent {
    constructor(clientesService) {
        this.clientesService = clientesService;
        this.clientesService.list().subscribe((resClientes) => {
            console.log(resClientes);
            //   this.clienteActual=new Cliente();
            this.clientes = resClientes;
            console.log(this.clientes);
        }, (err) => console.error(err));
    }
    ngOnInit() {
        console.log("Iniciando");
        this.clienteActual = new cliente_1.Cliente();
        $(document).ready(function () {
            $(".modal").modal();
        });
    }
    agregarCliente() {
        console.log(this.clienteActual);
        this.clientesService.insertar(this.clienteActual).subscribe((resClientes) => {
            console.log(resClientes);
        }, (err) => console.error(err));
    }
    eliminarCliente(id) {
    }
    visualizarCliente(id) {
        /* this.clientesService.listOne(id).subscribe((resClientes: any) => {
           console.log(resClientes);
           this.clienteActual=resClientes;
       },
           (err: any) => console.error(err)
         );*/
    }
    actualizarCliente() {
        console.log(this.clienteActual);
        this.clientesService.update(this.clienteActual).subscribe((resClientes) => {
            console.log(resClientes);
            this.clientesService.list().subscribe((resClientes) => {
                console.log(resClientes);
                //   this.clienteActual=new Cliente();
                this.clientes = resClientes;
            }, (err) => console.error(err));
        }, (err) => console.error(err));
    }
    editarFormularioCliente(id) {
        console.log('editarCliente', id);
        console.log(this.clienteActual);
        //this.clienteActual=undefined
        this.clientesService.listOne(id).subscribe((resClientes) => {
            console.log(resClientes);
            this.clienteActual = resClientes;
            $('#modalClientesActualizar').modal();
            $('#modalClientesActualizar').modal("open");
            console.log(this.clienteActual);
        }, (err) => console.error(err));
    }
};
ClientesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-clientes',
        templateUrl: './clientes.component.html',
        styleUrls: ['./clientes.component.css']
    })
], ClientesComponent);
exports.ClientesComponent = ClientesComponent;
