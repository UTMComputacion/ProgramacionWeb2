import { Component } from '@angular/core';
import { ProductoServices } from 'src/app/services/productos.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { Producto } from 'src/app/models/producto';
import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
declare var $ : any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos:any;
  productoActual:any;

  constructor(private productosService:ProductoServices, private comunicacionService: ComunicacionService){
    this.comunicacionService.observador$.subscribe(
      (msg) =>
      {
        console.log(msg)
        if(msg.componente == 3)
        this.productosService.list().subscribe((resP: any) => {
          console.log(resP);
       //   this.clienteActual=new Cliente();
          this.productos=resP;
          console.log(this.productos)
      },
          (err: any) => console.error(err)
        );
      }
      );
   }

   ngOnInit()
  {
    console.log("Iniciando");
      this.productoActual=new Producto();
    this.list();
    

    $(document).ready(function ()
    {
      $(".modal").modal();

    })  
  }

  eliminarProducto(id:any){

    this.productosService.eliminar(id).subscribe((resP: any) => {
      console.log(resP);
  },
      (err: any) => console.error(err)
    );

  }
  visualizarP(id:any){
   this.productosService.listOne(id).subscribe((resClientes: any) => {
       console.log(resClientes);
       this.productoActual=resClientes;
   },
       (err: any) => console.error(err)
     );
   }

  editarFormularioProducto(id:any){
    console.log('editarProducto', id);
    console.log(this.productoActual);
    this.productosService.listOne(id).subscribe((resP: any) => {
      console.log(resP);
      this.productoActual = resP;
      $('#modalProductosActualizar').modal();
      $('#modalProductosActualizar').modal("open");
      console.log(this.productoActual);
 
  },
      (err: any) => console.error(err)
    );
  }


  actualizarProducto(){
    console.log(this.productoActual)
    this.productosService.update(this.productoActual).subscribe((resp: any) => {
      console.log(resp);
      this.productosService.list().subscribe((resPr: any) => {
        console.log(resPr);
     //   this.clienteActual=new Cliente();
        this.productos=resPr;
    },
        (err: any) => console.error(err)
      );
  },
      (err: any) => console.error(err)
    );
  }


  list() {
    this.productosService.list().subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }

}
