"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRoutes = void 0;
const express_1 = require("express");
const usuarioController_1 = require("../controllers/usuarioController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/verificarUsuario', usuarioController_1.usuariosController.verificaUsuario);
        this.router.get('/esActivo/:id', usuarioController_1.usuariosController.esActivo);
        this.router.get('/', usuarioController_1.usuariosController.list);
        this.router.post('/CambiarPassword', usuarioController_1.usuariosController.CambiarPassword);
        this.router.post('/', usuarioController_1.usuariosController.create);
    }
}
exports.usuariosRoutes = new UsuariosRoutes();
exports.default = exports.usuariosRoutes.router;
