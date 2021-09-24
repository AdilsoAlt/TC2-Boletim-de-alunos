import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Aluno } from '../aluno.model';
import { listaAlunos } from '../listaAlunos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router) { }
  lista: Aluno[];
  routes: Router

  ngOnInit(): void {
    this.lista = listaAlunos
  }
  novoAluno: Aluno;
  cadastrarAluno(): void {
    var nome = (<HTMLInputElement>document.getElementById("nomeAluno")).value;
    var idadeStr = (<HTMLInputElement>document.getElementById("idadeAluno")).value;
    var url = (<HTMLInputElement>document.getElementById("fotoAluno")).value;
    if (nome == "") {
      alert("Campo nome obrigatório");
    }
    if (idadeStr == "") {
      alert("Campo idade obrigatório");
    } else {
      var idade: number = + idadeStr;
    }
    if (nome != "" && idadeStr != "") {
      this.novoAluno = { name: nome, age: idade, url: url };
      this.lista.push(this.novoAluno);
      alert("Aluno cadastrado com sucesso!");
      this.router.navigate(['listar']);
    }
  }

}
