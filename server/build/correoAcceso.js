"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var email = require("emailjs/email");
console.log("hola");
module.exports = (formulario) => {
    const token = jsonwebtoken_1.default.sign(formulario.correo, process.env.TOKEN_SECRET || 'prueba');
    console.log(formulario);
    var server = email.server.connect({
        user: "erikue@gmail.com",
        password: "yopajncyugwkitzy",
        host: "smtp.gmail.com",
        ssl: true,
    });
    var message = {};
    message = {
        from: "erik@gmail.com",
        to: formulario.correo,
        bcc: "",
        subject: "Probando ando",
        attachment: [
            { data: `¡¡Buenos dias !!
        <a href="http://localhost:4200/recuperar/${token}" >ACEPTAR</a>
<br><br>
        `, alternative: true }
        ]
    };
    console.log(message);
    server.send(message, function (err, message) { console.log(err); });
};
