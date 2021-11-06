import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { listaAlunos } from '../listaAlunos';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private service: DatabaseService) { }

  formNovoAluno: FormGroup
  lista: Aluno[];
  routes: Router
  novoAluno: Aluno;

  ngOnInit(): void {
    this.lista = listaAlunos
    this.initForm();
  }

private initForm(){
  this.formNovoAluno = new FormGroup({
    nomeAluno: new FormControl(null, [Validators.required]),
    idadeAluno: new FormControl(null, [Validators.required, Validators.min(18)]),
    fotoAluno: new FormControl(null)
  });
}

onSubmit():void{
  if(this.formNovoAluno.valid){
    var id = Date.now();
    var nome = this.formNovoAluno.get("nomeAluno").value;
    var idadeStr = this.formNovoAluno.get("idadeAluno").value;
    var idade: number = + idadeStr;
    var url = this.formNovoAluno.get("fotoAluno").value;
    this.novoAluno = { id: id, name: nome, age: idade, url: url };
    this.service.addAluno(this.novoAluno);
    alert("Aluno cadastrado com sucesso!");
    this.router.navigate(['listar']);
  }else{
    alert("Campo nome e idade obrigatórios");
    this.initForm();
  }
}

  /*
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
    var id = Date.now();

    if (nome != "" && idadeStr != "") {
      this.novoAluno = { id: id, name: nome, age: idade, url: url };
      this.lista.push(this.novoAluno);
      alert("Aluno cadastrado com sucesso!");
      this.router.navigate(['listar']);
    }
  }
  */

}
