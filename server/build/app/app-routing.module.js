"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const encargado_component_1 = require("./components/encargado/encargado.component");
const login_component_1 = require("./components/login/login.component");
const home_component_1 = require("./components/home/home.component");
const categorias_component_1 = require("./components/categorias/categorias.component");
const clientes_component_1 = require("./components/clientes/clientes.component");
const routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: 'categorias',
                component: categorias_component_1.CategoriasComponent,
            },
            {
                path: 'clientes',
                component: clientes_component_1.ClientesComponent,
            }
        ]
    },
    {
        path: 'encargado',
        component: encargado_component_1.EncargadoComponent,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
