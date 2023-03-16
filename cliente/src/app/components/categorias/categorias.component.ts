import { Component } from '@angular/core';
import{CategoriasService} from '../../services/categorias.service'
import { ComunicacionService } from 'src/app/services/comunicacion.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
categorias : any
constructor(private comunicacionService: ComunicacionService,private categoriasService: CategoriasService){
  this.comunicacionService.observador$.subscribe(
    (msg) =>
    {
      console.log(msg);
      if(msg.componente == 2)
      this.categoriasService.list().subscribe((resCategorias: any) => {
        console.log(resCategorias);
        this.categorias=resCategorias
    },
        (err: any) => console.error(err)
      );
    
    }
    );
  this.categoriasService.list().subscribe((resCategorias: any) => {
    console.log(resCategorias);
    this.categorias=resCategorias
},
    (err: any) => console.error(err)
  );
}
eliminarCategoria(id:any){
  console.log("eliminar categoria "+id)
  this.categoriasService.eliminar(id).subscribe((resCategorias: any) => {
    console.log(resCategorias);
    this.categoriasService.list().subscribe((resCategorias: any) => {
      console.log(resCategorias);
      this.categorias=resCategorias
  },
      (err: any) => console.error(err)
    );
},
    (err: any) => console.error(err)
  );
}
visualizarCategoria(id:any){
  console.log("visualizar categoria "+id)

}
editarCategoria(id:any){
  console.log("editar categoria "+id)

}
}
