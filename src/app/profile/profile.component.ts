import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() exibirPerfil: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

}
