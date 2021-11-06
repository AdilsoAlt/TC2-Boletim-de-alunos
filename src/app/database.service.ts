import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { listaAlunos } from './listaAlunos';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  todosAlunos: Aluno[] = listaAlunos;
  constructor() { }

  getAlunos(): Aluno[] {
    return this.todosAlunos;
  }

  getAluno(id: number): Aluno {
    var aluno: Aluno;
    this.todosAlunos.forEach(item => {
      if (item.id == id) {
        aluno = item;
      }
    });
    return aluno
  }

  updateAluno(id: number, aluno: Aluno) {
    this.deleteAluno(id);
    this.addAluno(aluno);
  }

  deleteAluno(id: number) {
    var index = 0;
    var indexElemento = 0
    this.todosAlunos.forEach(item => {
      if (item.id == id) {
        indexElemento = index;
      } else {
        index = index + 1;
      }
    });
    this.todosAlunos.splice(indexElemento, 1);
  }

  addAluno(aluno: Aluno) {
    this.todosAlunos.push(aluno);
    return true;
  }

}
