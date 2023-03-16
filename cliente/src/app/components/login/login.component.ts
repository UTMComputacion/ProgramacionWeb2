import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
//importamos el servicio
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from "../../models/usuario";
import { CorreoService } from 'src/app/services/correo.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //creamos la varible
  usuario = new Usuario();
  constructor(private correoService: CorreoService, private usuarioService: UsuarioService, private router: Router) {

  }
  modalCambiarContrasenya() {
    console.log("modalCambiarContrasenya");
    $('#modalCambiarContrasenya').modal({ dismissible: false });
    $('#modalCambiarContrasenya').modal('open');
  }
  cambiarContrasenya() {
    console.log(this.usuario);

    this.correoService.enviarCorreoRecuperarContrasenya(this.usuario).subscribe((resUsuario: any) => {
      console.log(resUsuario);
    }, (err: any) => console.error(err));
  }
  verificarUsuario() {

    this.usuarioService.VerificarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {
      console.log(resUsuario);
      if (resUsuario == null) {
        console.log("el usuario no existe")
        Swal.fire({
          position: "center",
          icon: "error",
          title: "correo o contraseña inválido",
          showConfirmButton: true
        })
      } else {
        console.log("el usuario existe");
        localStorage.setItem("tipoUsuario", resUsuario.tipo + " ")        // agrega variables de entorno, es como diccionario
        this.router.navigate(['home/clientes'])
      }
    },
      (err: any) => console.error(err)
    );
  }
}