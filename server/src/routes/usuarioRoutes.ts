import {Request,Response} from 'express';
import pool from '../database';
import { Router } from 'express';
import { usuariosController } from '../controllers/usuarioController';

class UsuariosRoutes
{

    public router: Router=Router();
    constructor()
    {
    this.config();
    }
    config() : void
{
this.router.post('/verificarUsuario',usuariosController.verificaUsuario);
this.router.get('/esActivo/:id',usuariosController.esActivo);
this.router.get('/',usuariosController.list);
this.router.post('/CambiarPassword',usuariosController.CambiarPassword);
this.router.post('/',usuariosController.create);


}

}
export const usuariosRoutes = new UsuariosRoutes();

export default usuariosRoutes.router;