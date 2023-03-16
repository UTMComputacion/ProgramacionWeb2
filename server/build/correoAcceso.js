"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var email = require("emailjs/email");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = (formulario) => {
    const token = jsonwebtoken_1.default.sign(formulario.correo, process.env.TOKEN_SECRET || 'prueba');
    console.log(token, formulario.correo, process.env.TOKEN_SECRET);
    /*
    var server = email.server.connect({
    user:
    "desarrollo@correo.com",
    password:"prueba",
    host:
    "smtp.gmail.com",
    ssl: true,
    });
    
    var message: any ={};
    message =
    {
    from: "Desarrollo UTM <erik@mixteco.utm.mx>",
    to: formulario.correo,
    bcc: "",
    subject: "Cambio de contraseña",
    attachment: [
    { data: `
    En la siguiente liga podrás cambiar tu contraseña:
    <a href="http://localhost:4200/recuperar/${token}" >ACEPTAR</a>
    <br><br>
    `, alternative: true }
    ]
    };*/
    //server.send(message, function(err:any, message:any) { console.log(1); });
};
