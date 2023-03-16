"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membresiasRoutes = void 0;
const express_1 = require("express");
const membresiasController_1 = require("../controllers/membresiasController");
class MembresiasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', membresiasController_1.membresiasController.list);
        this.router.get('/:id', membresiasController_1.membresiasController.listOne);
        this.router.post('/', membresiasController_1.membresiasController.create);
    }
}
exports.membresiasRoutes = new MembresiasRoutes();
exports.default = exports.membresiasRoutes.router;
