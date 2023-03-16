"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasComponent = void 0;
const core_1 = require("@angular/core");
let CategoriasComponent = class CategoriasComponent {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
        this.categoriasService.list().subscribe((resCategorias) => {
            console.log(resCategorias);
            this.categorias = resCategorias;
        }, (err) => console.error(err));
    }
    eliminarCategoria(id) {
        console.log("eliminar categoria " + id);
        this.categoriasService.eliminar(id).subscribe((resCategorias) => {
            console.log(resCategorias);
            this.categoriasService.list().subscribe((resCategorias) => {
                console.log(resCategorias);
                this.categorias = resCategorias;
            }, (err) => console.error(err));
        }, (err) => console.error(err));
    }
    visualizarCategoria(id) {
        console.log("visualizar categoria " + id);
    }
    editarCategoria(id) {
        console.log("editar categoria " + id);
    }
};
CategoriasComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-categorias',
        templateUrl: './categorias.component.html',
        styleUrls: ['./categorias.component.css']
    })
], CategoriasComponent);
exports.CategoriasComponent = CategoriasComponent;
