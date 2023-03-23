import { Request, response, Response } from 'express';
import pool from '../database';
import bcrypt from 'bcryptjs';
class UsuariosController {
    public async verificaUsuario(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const consulta = `SELECT tipo FROM usuarios WHERE correo="${req.body.correo}"`;
        console.log(consulta)
        let prueba = await bcrypt.compare("", req.body.password);
        const respuesta = await pool.query(consulta);
        if (respuesta.length == 0) {
            res.json(null);
        } else {
            res.json(respuesta[0])
        }


    }
    public async esActivo(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const { id } = req.params;

        const consulta = `SELECT * FROM clientes WHERE CURRENT_DATE>= fechaIni and CURRENT_DATE<= fechaFin and id=${id}`;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM usuarios';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        let pass = req.body.password;
        console.log(pass)
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        console.log(req.body.password)
        let prueba = await bcrypt.compare("holota", req.body.password);
        console.log(prueba)
        const resp = await pool.query("INSERT INTO usuarios set ?",
            [req.body]);

        res.json(resp);
    }
    public async CambiarPassword(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        let pass = req.body.password;
        let cor=req.body.correo;
        console.log(pass,cor);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        console.log(req.body.password)
       
     
        const resp = await pool.query("UPDATE usuarios set password=? where correo=?",[req.body.password,req.body.correo]);

        res.json(resp);
    }

}
export const usuariosController = new UsuariosController();

