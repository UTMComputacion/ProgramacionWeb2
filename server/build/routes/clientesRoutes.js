"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesRoutes = void 0;
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
const auth_1 = require("../middleware/auth");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, clientesController_1.clientesController.list);
        this.router.get('/:id1', auth_1.validarToken, clientesController_1.clientesController.listOne);
        this.router.get('/:fechaFin', clientesController_1.clientesController.listFecha);
        this.router.get('/:id1/:id2', clientesController_1.clientesController.listRange);
        this.router.post('/', clientesController_1.clientesController.create);
        this.router.delete('/:id', clientesController_1.clientesController.eliminar);
        this.router.put('/:id', clientesController_1.clientesController.actualizar);
    }
}
exports.clientesRoutes = new ClientesRoutes();
exports.default = exports.clientesRoutes.router;
