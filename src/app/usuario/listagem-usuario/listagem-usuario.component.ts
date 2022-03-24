import { Component, OnInit } from '@angular/core';
import {USUARIOS} from "../../shared/model/USUARIOS";
import {Usuario} from "../../shared/model/usuario";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {
  usuarios = USUARIOS;
  constructor() { }

  ngOnInit(): void {
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
