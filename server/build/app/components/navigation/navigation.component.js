"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationComponent = void 0;
const core_1 = require("@angular/core");
const cliente_1 = require("../../models/cliente");
let NavigationComponent = class NavigationComponent {
    constructor(router, clientesService, membresiaService, categoriasService) {
        this.router = router;
        this.clientesService = clientesService;
        this.membresiaService = membresiaService;
        this.categoriasService = categoriasService;
        this.cliente = new cliente_1.Cliente();
        this.tipoUsuario = Number(localStorage.getItem("tipoUsuario"));
        console.log(this.tipoUsuario);
        this.membresiaService.list().subscribe((resMembresias) => {
            console.log(resMembresias);
            this.membresias = resMembresias;
        }, (err) => console.error(err));
    }
    ngOnInit() {
        //var elems = document.querySelectorAll('.sidenav');
        //var instances = M.Sidenav.init(elems, {});
        $(document).ready(function () {
            $(".modal").modal();
        });
    }
    agregarCliente() {
        console.log(this.cliente);
        this.clientesService.insertar(this.cliente).subscribe((resClientes) => {
            console.log(resClientes);
        }, (err) => console.error(err));
    }
    visualizarFormularioCliente() {
        $('#modalClientes').modal();
        $('#modalClientes').modal("open");
    }
    salir() {
        localStorage.removeItem("tipoUsuario");
        this.router.navigate(['login']);
        console.log("salir");
    }
};
NavigationComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.css']
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
