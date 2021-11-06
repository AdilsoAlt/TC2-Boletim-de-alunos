import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista: Aluno[];
  aluno: Aluno;
  constructor(private router: Router,private service: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.getAlunos();
    let id = this.rota.snapshot.paramMap.get("id");
    console.log(id);
    if(id != null){
      var idParm: number = + id;
      this.service.deleteAluno(idParm);
      alert("Aluno excluído com sucesso!");
      this.router.navigate(['listar']);
    }
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id");
    this.aluno = this.service.getAluno(parseInt(id));
  }

  getAlunos(): void {
    this.lista = this.service.getAlunos();
  }

}
