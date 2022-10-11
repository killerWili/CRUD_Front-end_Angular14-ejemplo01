import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';


const routes: Routes = [
  {path :'usuarios',component:ListaUsuariosComponent},
  {path:'',redirectTo:'usuarios',pathMatch:'full'},
  {path:'registrar-usuario',component:RegistrarUsuarioComponent},
  {path:'actualizar-usuario/:id',component:ActualizarUsuarioComponent},
  {path:'usuario-detalles/:id',component:UsuarioDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
