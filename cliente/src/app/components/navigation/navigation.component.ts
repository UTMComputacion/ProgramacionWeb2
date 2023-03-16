import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from './../../services/categorias.service'
import { Cliente } from '../../models/cliente';
import { Categoria } from 'src/app/models/categoria';
import { ClientesService } from '../../services/clientes.service'
import { MembresiaService } from '../../services/membresia.service';
import { ProductoServices } from 'src/app/services/productos.service';
import { Producto } from '../../models/producto';

import { ComunicacionService } from 'src/app/services/comunicacion.service';
//import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  clientes: any
  cliente = new Cliente();
  tipoUsuario: number
  categorias: any;
  membresias: any;
  categoria = new Categoria();
  producto = new Producto();



  constructor(private router: Router,
    private clientesService: ClientesService,
    private membresiaService: MembresiaService,
    private comunicacionService: ComunicacionService,
    private categoriasService: CategoriasService,
    private productoService:ProductoServices) {

    this.tipoUsuario = Number(localStorage.getItem("tipoUsuario"))
    console.log(this.tipoUsuario)

    this.membresiaService.list().subscribe((resMembresias: any) => {
      console.log(resMembresias);
      this.membresias = resMembresias;
    },
      (err: any) => console.error(err)
    );
  }
  /*enviarMensaje() {
    let opciones = { "componente": 1 };
    console.log(opciones);
    this.comunicacionService.enviar(opciones);
    cliente : 1
    categorias :2
    productos : 3 

  }*/
  enviarMensaje(componente: number) {
    let opciones = { "componente": componente };
    console.log(opciones);
    this.comunicacionService.enviar(opciones);
  }
  ngOnInit() {
    //var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems, {});
    $(document).ready(function () {
      $(".modal").modal();

    })

  }
  agregarCliente() {

    console.log(this.cliente);
    this.clientesService.insertar(this.cliente).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.enviarMensaje(1)
    },
      (err: any) => console.error(err)
    );

  }

  agregarProducto() {

    this.productoService.insertar(this.producto).subscribe((resPr: any) => {
      console.log(resPr);
      this.enviarMensaje(3);
    },
      (err: any) => console.error(err)
    );

  }
  agregarCategoria() {

    console.log(this.categoria);
    this.categoriasService.insertar(this.categoria).subscribe((resCategoria: any) => {
      console.log(resCategoria);
      this.enviarMensaje(2)
    },
      (err: any) => console.error(err)
    );

  }
  visualizarFormularioCliente() {
    $('#modalClientes').modal();
    $('#modalClientes').modal("open");
  }
  visualizarFormularioProducto() {
    $('#modalProductos').modal();
    $('#modalProductos').modal("open");
  }
  salir() {
    localStorage.removeItem("tipoUsuario")
    this.router.navigate(['login'])
    console.log("salir")
  }
}
