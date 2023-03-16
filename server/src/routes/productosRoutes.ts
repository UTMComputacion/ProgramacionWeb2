import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { productosController } from '../controllers/productosController';

class ProductosRoutes
{

    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
{
this.router.get('/',productosController.list);
this.router.get('/:id1', productosController.listOne);
this.router.post('/',productosController.create);
this.router.put('/update/:idProducto',productosController.update);
this.router.delete('/delete/:idProducto',productosController.delete)




}

}
export const productosRoutes = new ProductosRoutes();

export default productosRoutes.router;