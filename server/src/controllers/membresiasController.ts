import {Request,Response} from 'express';
import pool from '../database';
class MembresiasController
{
public async list(req: Request, res: Response ): Promise<void>{
const consulta = 'SELECT * FROM membresia';
console.log(consulta)
const respuesta = await pool.query(consulta);
console.log(respuesta);
res.json( respuesta );


}

public async listOne(req: Request, res: Response): Promise <void>{
    console.log(req.params);
    const {id} = req.params;
    const consulta = 'SELECT * FROM membresia WHERE id = '+ id;
    console.log(consulta)
    const respuesta = await pool.query(consulta);
    if(respuesta.length>0){
    res.json(respuesta[0]);
    return ;
    }
    res.status(404).json({'mensaje': 'Membresia no encontrado'});
    }
public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const resp = await pool.query("INSERT INTO membresia set ?",
    [req.body]);
    res.json(resp);
    }
}
export const membresiasController = new MembresiasController();
