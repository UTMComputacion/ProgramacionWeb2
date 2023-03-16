import express, {Application} from 'express'; //libreria
import indexRoutes from './routes/indexRoutes';
import institutosRoutes from './routes/institutosRoutes';
import clientesRoutes from './routes/clientesRoutes';
import usuariosRoutes from './routes/usuarioRoutes';
import membresiasRoutes from './routes/membresiasRoutes';
import productosRoutes from './routes/productosRoutes';
import categoriaRoutes from './routes/categoriaRoutes';

import morgan from 'morgan';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from 'cors';
class Server //clase
{
public app: Application; //variable de control
constructor()
{
this.app= express(); //ejecutar servidor
this.config();
this.routes();

}
config (): void //definir propiedades del servidor (en este caso el puerto)
{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
routes (): void
{
    this.app.use(indexRoutes);
    this.app.use('/api/institutos',institutosRoutes);
    this.app.use('/api/clientes',clientesRoutes);
    this.app.use('/api/usuarios',usuariosRoutes);
    this.app.use('/api/membresias',membresiasRoutes);
    this.app.use('/api/productos',productosRoutes);
    this.app.use('/api/categorias',categoriaRoutes);

}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Servidor se encuentra en el puerto: ',this.app.get('port'));
});
}
}
const server = new Server();
server.start();