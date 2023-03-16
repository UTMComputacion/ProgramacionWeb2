"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const login_component_1 = require("./components/login/login.component");
const forms_1 = require("@angular/forms");
const encargado_component_1 = require("./components/encargado/encargado.component");
const home_component_1 = require("./components/home/home.component");
const navigation_component_1 = require("./components/navigation/navigation.component");
const footer_component_1 = require("./components/footer/footer.component");
const categorias_component_1 = require("./components/categorias/categorias.component");
const clientes_component_1 = require("./components/clientes/clientes.component");
const membresias_component_1 = require("./components/membresias/membresias.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            encargado_component_1.EncargadoComponent,
            home_component_1.HomeComponent,
            navigation_component_1.NavigationComponent,
            footer_component_1.FooterComponent,
            categorias_component_1.CategoriasComponent,
            clientes_component_1.ClientesComponent,
            membresias_component_1.MembresiasComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
            forms_1.FormsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
