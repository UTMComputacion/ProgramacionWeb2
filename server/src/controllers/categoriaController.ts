import { Request, response, Response } from 'express';
import pool from '../database';
class CategoriaController {

    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params)
        const consulta = 'SELECT * FROM categorias';
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM categorias WHERE idCategoria = ${id}`);
        res.json(resp);
    }

    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO categorias set ?",
            [req.body]);
        res.json(resp);
    }

}
export const categoriaController = new CategoriaController();

