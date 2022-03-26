import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";





@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  exports: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule

  ]
})
export class UsuarioModule { }
