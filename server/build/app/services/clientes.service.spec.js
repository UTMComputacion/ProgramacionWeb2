"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const clientes_service_1 = require("./clientes.service");
describe('ClientesService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(clientes_service_1.ClientesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
