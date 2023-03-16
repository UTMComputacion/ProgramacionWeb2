"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRoutes = void 0;
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
class CategoriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', categoriaController_1.categoriaController.list);
        this.router.delete('/:id', categoriaController_1.categoriaController.eliminar);
        this.router.post('/', categoriaController_1.categoriaController.create);
    }
}
exports.categoriaRoutes = new CategoriaRoutes();
exports.default = exports.categoriaRoutes.router;
