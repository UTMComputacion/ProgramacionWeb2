"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuariosController {
    verificaUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consulta = `SELECT tipo FROM usuarios WHERE correo="${req.body.correo}"`;
            console.log(consulta);
            let prueba = yield bcryptjs_1.default.compare("", req.body.password);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) {
                res.json(null);
            }
            else {
                res.json(respuesta[0]);
            }
        });
    }
    esActivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const consulta = `SELECT * FROM clientes WHERE CURRENT_DATE>= fechaIni and CURRENT_DATE<= fechaFin and id=${id}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM usuarios';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let pass = req.body.password;
            console.log(pass);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            console.log(req.body.password);
            let prueba = yield bcryptjs_1.default.compare("holota", req.body.password);
            console.log(prueba);
            const resp = yield database_1.default.query("INSERT INTO usuarios set ?", [req.body]);
            res.json(resp);
        });
    }
    CambiarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let pass = req.body.password;
            let cor = req.body.correo;
            console.log(pass, cor);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            console.log(req.body.password);
            const resp = yield database_1.default.query("UPDATE usuarios set password=? where correo=?", [req.body.password, req.body.correo]);
            res.json(resp);
        });
    }
}
exports.usuariosController = new UsuariosController();
