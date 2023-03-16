import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pool from "./database";
const correoAcceso = require('./correoAcceso');
class Server
{
public app: Application;
constructor()
{
dotenv.config();
this.app = express();
this.config();
this.routes();
}
config(): void
{
this.app.use(express.urlencoded({limit: '50mb',parameterLimit: 100000,extended:
false}));
this.app.use(express.json({limit: '50mb'}));this.app.set('port', process.env.PORT || 3001);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.urlencoded({ extended: false }));
}
routes(): void
{
    this.app.post('/enviarCorreoRecuperarContrasenya', (req, res) =>
    {
        correoAcceso(req.body); 
    }); 
}

start()
{
this.app.listen(this.app.get('port'), () =>
{
console.log(`Listening on port ${this.app.get('port')}`);
});
}
}
const server = new Server();
server.start();