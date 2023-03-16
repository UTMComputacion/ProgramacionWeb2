"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const membresia_service_1 = require("./membresia.service");
describe('MembresiaService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(membresia_service_1.MembresiaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
