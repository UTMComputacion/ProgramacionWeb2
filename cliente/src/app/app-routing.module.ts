import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ EncargadoComponent} from './components/encargado/encargado.component'
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component'
import {CategoriasComponent} from './components/categorias/categorias.component'
import{ClientesComponent} from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import {NavigationComponent} from './components/navigation/navigation.component'
import * as $ from 'jquery';
const routes: Routes = [
{
path: "",
redirectTo: "/login",
pathMatch: "full"
},
{
path: 'login',
component: LoginComponent,
},
{
    path: 'recuperar/:token',
    component: RecuperarComponent,
},
{
    path: 'home',
    component: HomeComponent,
    children : [
        {
            path:'categorias',
            component: CategoriasComponent,
        },
        {
            path:'clientes',
            component: ClientesComponent,
        },
        {
            path:'productos',
            component:ProductosComponent,
        }
    ]
    },
{
    path: 'encargado',
    component: EncargadoComponent,
},
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }