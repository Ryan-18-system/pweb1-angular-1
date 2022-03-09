import { Component } from '@angular/core';
import {Usuario} from "../shared/model/usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Programação para Web 2022';
  usuario: Usuario;
  usuarios: Array<Usuario>
  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }
  inserirUsuario(): void{
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }
}
