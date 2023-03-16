import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';
import { categoriaController } from '../controllers/categoriaController';

class CategoriaRoutes
{

    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
{
this.router.get('/',categoriaController.list);
this.router.delete('/:id',categoriaController.eliminar);
this.router.post('/',categoriaController.create);

}

}
export const categoriaRoutes = new CategoriaRoutes();

export default categoriaRoutes.router;