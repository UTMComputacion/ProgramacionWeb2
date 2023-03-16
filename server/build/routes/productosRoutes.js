"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRoutes = void 0;
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.list);
        this.router.get('/:id1', productosController_1.productosController.listOne);
        this.router.post('/', productosController_1.productosController.create);
        this.router.put('/update/:idProducto', productosController_1.productosController.update);
        this.router.delete('/delete/:idProducto', productosController_1.productosController.delete);
    }
}
exports.productosRoutes = new ProductosRoutes();
exports.default = exports.productosRoutes.router;
