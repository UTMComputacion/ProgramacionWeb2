import {Request,response,Response} from 'express';
import pool from '../database';
class ProductosController
{

public async list(req: Request, res: Response ): Promise<void>{
    console.log(req.params)
    const consulta = 'SELECT * FROM productos';
    console.log(consulta)
    const respuesta = await pool.query(consulta);
    console.log(respuesta);
    res.json( respuesta );
        
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM productos WHERE id = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Producto no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO productos set ?",
        [req.body]);
        res.json(resp);
        }
        public async update(req: Request, res: Response): Promise<void> {
            const { idProducto } = req.params;
            console.log(req.params);
            const resp = await pool.query("UPDATE productos set ? WHERE id = ?", [req.body, idProducto]);
            res.json(resp);
            }

            public async delete(req: Request, res: Response): Promise<void> {
                const { idProducto } = req.params;
                const resp = await pool.query(`DELETE FROM productos WHERE id = ${idProducto}`);
                res.json(resp);
                }

}
export const productosController = new ProductosController();

