import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {
  usuarios: Array<Usuario>;
  constructor(private usuarioSevice:UsuarioService) {

  }

  ngOnInit(): void {
      this.usuarioSevice.listar().subscribe(
        usuarios => this.usuarios = usuarios
      );
  }
  editar(usuario:Usuario): void{
    usuario.nome += 'Alterado';

  }
  remover(usuario:Usuario):void{
    const indiceUsuarioRemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf)
    if(indiceUsuarioRemover > -1){
      this.usuarios.splice(indiceUsuarioRemover,1)
    }
  }


}
