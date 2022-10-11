import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL obtiene el listado de todos los usuarios desde backend.
  private Url = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }

  //metodo para obtener los usuario
  obtenerListaDeUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.Url}`);
  }
  //metodo para registrar un usuarios
  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    console.log(usuario);
    return this.httpClient.post<Usuario>(`${this.Url}`, usuario);
  }

  //este metodo sirve para actualizar el empleado
  actualizarUsuario(id: number, usuario: Usuario): Observable<Object> {
    return this.httpClient.put(`${this.Url}/${id}`, usuario);
  }

  //metodo obtener o buscar un usuario
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.Url}/${id}`);
  }

  eliminarUsuario(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.Url}/${id}`);
  }
}
