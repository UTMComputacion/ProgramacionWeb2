import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';
import { validarToken } from '../middleware/auth';
class ClientesRoutes
{

    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
{
this.router.get('/',validarToken,clientesController.list);

this.router.get('/:id1',validarToken,clientesController.listOne);



this.router.get('/:fechaFin',clientesController.listFecha);
this.router.get('/:id1/:id2',clientesController.listRange);
this.router.post('/', clientesController.create);
this.router.delete('/:id',clientesController.eliminar);
this.router.put('/:id', clientesController.actualizar);
}

}
export const clientesRoutes = new ClientesRoutes();

export default clientesRoutes.router;