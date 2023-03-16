"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const categorias_service_1 = require("./categorias.service");
describe('CategoriasService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(categorias_service_1.CategoriasService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
