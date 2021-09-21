import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import {listaAlunos} from '../listaAlunos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  lista : Aluno[];

  constructor() { }

  ngOnInit(): void {
    this.lista = listaAlunos
  }

  alunoSelecionado : Aluno;
  mostrarProfile(aluno : Aluno) : void {
    this.alunoSelecionado = aluno;
  }

}
