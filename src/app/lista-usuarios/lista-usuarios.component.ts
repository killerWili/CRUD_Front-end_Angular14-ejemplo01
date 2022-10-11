import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';//(ctrl+ñ)>npm install --save sweetalert2@7.26.9

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios:Usuario[];
  constructor(private usuarioServicio:UsuarioService, private router:Router) { }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  actualizarUsuario(id:number){
    console.log(id)
    this.router.navigate(['actualizar-usuario',id]);
  }
  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }
  eliminarUsuario(id:number){
    Swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al usuario",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) =>{
      if(result.value){
        this.usuarioServicio.eliminarUsuario(id).subscribe(dato=>{
          console.log(dato);
          this.obtenerUsuarios();
          Swal('Empleado eliminado','El usuario ha sido eliminado con exito','success')
        })
      }
    })
  }

  verDetallesDelUsuario(id:number){
    this.router.navigate(['usuario-detalles',id]);
  }

}
