import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  id:number;
  usuario:Usuario = new Usuario();
  constructor(private usuarioService:UsuarioService, private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato=>{
      this.usuario=dato;
    }//,error=>console.log(error)
    );
  }
  

  irALaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    Swal('El Usuario actualizado',`El usuario ${this.usuario.nombre} ${this.usuario.apellido} ha sido actualizado con exito`,`success`);
  }
  onSubmit(){
    this.usuarioService.actualizarUsuario(this.id,this.usuario).subscribe(dato => {
      this.irALaListaDeUsuarios();
    }//,error => console.log(error)
    );
  }

}
