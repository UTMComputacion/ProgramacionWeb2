import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
import {ClientesService} from '../../services/clientes.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

declare var $ : any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes : any
  clienteActual: any;

  constructor(private clientesService: ClientesService, private comunicacionService: ComunicacionService){
    this.comunicacionService.observador$.subscribe(
      (msg) =>
      {
        console.log(msg)
        if(msg.componente == 1)
        this.clientesService.list().subscribe((resClientes: any) => {
          console.log(resClientes);
       //   this.clienteActual=new Cliente();
          this.clientes=resClientes
          console.log(this.clientes)
      },
          (err: any) => console.error(err)
        );
      }
      );
    this.clientesService.list().subscribe((resClientes: any) => {
      console.log(resClientes);
   //   this.clienteActual=new Cliente();
      this.clientes=resClientes
      console.log(this.clientes)
  },
      (err: any) => console.error(err)
    );
  }
  ngOnInit()
  {
    console.log("Iniciando");
    this.clienteActual=new Cliente();
    

    $(document).ready(function ()
    {
      $(".modal").modal();

    })  
  }
  agregarCliente(){

    console.log(this.clienteActual);
    this.clientesService.insertar(this.clienteActual).subscribe((resClientes: any) => {
      console.log(resClientes);
  },
      (err: any) => console.error(err)
    );
  }
  eliminarCliente(id:any){

    this.clientesService.eliminar(id).subscribe((resClientes: any) => {
      console.log(resClientes);
  },
      (err: any) => console.error(err)
    );

  }
  visualizarCliente(id:any){
   /* this.clientesService.listOne(id).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.clienteActual=resClientes;
  },
      (err: any) => console.error(err)
    );*/
  }
  actualizarCliente(){
    console.log(this.clienteActual)
    this.clientesService.update(this.clienteActual).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.clientesService.list().subscribe((resClientes: any) => {
        console.log(resClientes);
     //   this.clienteActual=new Cliente();
        this.clientes=resClientes
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }
  editarFormularioCliente(id:any){
    console.log('editarCliente', id);
    console.log(this.clienteActual);

    //this.clienteActual=undefined
   

    this.clientesService.listOne(id).subscribe((resClientes: any) => {
      console.log(resClientes);
      this.clienteActual = resClientes;
      $('#modalClientesActualizar').modal();
      $('#modalClientesActualizar').modal("open");
      console.log(this.clienteActual);
 
  },
      (err: any) => console.error(err)
    );
  }
  
}
