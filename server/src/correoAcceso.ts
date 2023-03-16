var email = require("emailjs/email");
//import { SMTPClient } from 'emailjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
module.exports = (formulario: any) =>
{
const token : string = jwt.sign(formulario.correo, process.env.TOKEN_SECRET || 'prueba');
console.log(token,formulario.correo,process.env.TOKEN_SECRET);



var server = email.server.connect({
user:
"ingenieria.computacion.utm@gmail.com",
password:"snpdqcgnxdiydvbv",
port:587,
host:
"smtp.gmail.com",
ssl: true,
});

var message: any ={};
message =
{
from: "ingenieria.computacion.utm@gmail.com",
to: "vaaa020526@gs.utm.mx",
bcc: "",
subject: "Cambio de contraseña",
attachment: [
{ data: `
En la siguiente liga podrás cambiar tu contraseña:
<a href="http://localhost:4200/recuperar/${token}" >ACEPTAR</a>
<br><br>
`, alternative: true }
]
};
console.log(message)

server.send(message, function(err:any, message:any) { console.log(1); });
}