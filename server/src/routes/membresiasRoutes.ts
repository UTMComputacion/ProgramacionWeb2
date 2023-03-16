import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { membresiasController } from '../controllers/membresiasController';

class MembresiasRoutes
{

    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/',membresiasController.list);
        this.router.get('/:id',membresiasController.listOne);
        this.router.post('/',membresiasController.create);
    }


}
export const membresiasRoutes = new MembresiasRoutes();

export default membresiasRoutes.router;