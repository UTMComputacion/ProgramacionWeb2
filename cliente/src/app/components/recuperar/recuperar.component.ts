import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorreoService } from 'src/app/services/correo.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { param } from 'jquery';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  passwordNueva : any
  passwordCompara : any
  token: any
  usuario1 = new Usuario();
  usuario2 = new Usuario();
  constructor(private router: Router,private route: ActivatedRoute, private correoService: CorreoService,
    private usuarioService:UsuarioService) {
    this.route.paramMap.subscribe(
      params => {
        this.token = params.get('token');
        console.log(this.token);
        this.correoService.decodificarMail(this.token).subscribe((resP: any) => {
          console.log(resP);
        }
        ), (err: any) => console.error(err)
      }, err => console.error(err)
    );
  }

  enviarContrasenia(){
    console.log(this.usuario1.password);
    console.log(this.usuario2.password);
    if (this.usuario1.password == this.usuario2.password){
    //  this.router.navigate(['login'])
      console.log(this.usuario1.password.length);
      var countMayus=0;
      var countDigitos=0;
      var countEspecial = 0;
      for(var i=0; i<this.usuario1.password.length; i++){
        if(this.usuario1.password[i]>='A'&& this.usuario1.password[i]<='Z')
          {countMayus++;
            console.log(this.usuario1.password[i])
          }
          else if(this.usuario1.password[i]>='0'&& this.usuario1.password[i]<='9')
          {countDigitos++;
          }
        else if((this.usuario1.password[i]>='a'&& this.usuario1.password[i]<='z') || this.usuario1.password[i]<=' '){
          
        }
        else{
          countEspecial++;
        }
          
      }
      
      console.log("Mayusculas: "+countMayus);
      console.log("Digitos:" ,countDigitos);
      console.log("Especial: "+countEspecial);



      if(countDigitos > 0 && countEspecial > 0 && countMayus > 0){
        this.usuarioService.CambiarPassword(this.usuario1).subscribe((res:any) =>{
          console.log(res);
        })
        this.router.navigate(['login'])

      }
      else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "La contraseña no cumple con las condiciones establecidas",
          showConfirmButton: true
        })
      }

    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: true
      })
    }
  }

}
