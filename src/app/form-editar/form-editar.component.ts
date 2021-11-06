import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit {

  formEditaAluno: FormGroup
  aluno: Aluno;

  constructor(private router: Router,private database: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.getAluno();
    this.formEditaAluno = new FormGroup({
      nomeAluno: new FormControl(this.aluno.name, [Validators.required]),
      idadeAluno: new FormControl(this.aluno.age, [Validators.required, Validators.min(18)]),
      fotoAluno: new FormControl(this.aluno.url),
      idAluno: new FormControl(this.aluno.id)
    });
  }

  onSubmit():void{
    if(this.formEditaAluno.valid){
      var id = this.formEditaAluno.get("idAluno").value;
      var nome = this.formEditaAluno.get("nomeAluno").value;
      var idadeStr = this.formEditaAluno.get("idadeAluno").value;
      var idade: number = + idadeStr;
      var url = this.formEditaAluno.get("fotoAluno").value;
      this.aluno = { id: id, name: nome, age: idade, url: url };
      this.database.updateAluno(id,this.aluno);
      alert("Aluno atualizado com sucesso!");
      this.router.navigate(['listar']);
    }else{
      alert("Campo nome e idade obrigatórios");
      this.initForm();
    }
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id");
    this.aluno = this.database.getAluno(parseInt(id));
  }
}
