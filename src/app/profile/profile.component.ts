import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  aluno: Aluno;
  constructor(private database: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.getAluno();
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id");
    this.aluno = this.database.getAluno(parseInt(id));
  }

}
