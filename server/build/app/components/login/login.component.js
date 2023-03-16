"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const usuario_1 = require("../../models/usuario");
let LoginComponent = class LoginComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        //creamos la varible
        this.usuario = new usuario_1.Usuario();
    }
    verificarUsuario() {
        this.usuarioService.VerificarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario) => {
            console.log(resUsuario);
            if (resUsuario == null) {
                console.log("el usuario no existe");
                sweetalert2_1.default.fire({
                    position: "center",
                    icon: "error",
                    title: "correo o contraseña inválido",
                    showConfirmButton: true
                });
            }
            else {
                console.log("el usuario existe");
                localStorage.setItem("tipoUsuario", resUsuario.tipo + " "); // agrega variables de entorno, es como diccionario
                this.router.navigate(['home/clientes']);
            }
        }, (err) => console.error(err));
    }
};
LoginComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
