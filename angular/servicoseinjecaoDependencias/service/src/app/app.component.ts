import { Component, OnInit } from '@angular/core';
import { PessoasService } from './shared/services/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pessoasComponente = [
    {
      nome: '',
      sobrenome: '',
      idade: 0
    }
  ]

  constructor(private pessoasServie: PessoasService){

  }

  ngOnInit(){
   this.getPessoas();
  }

  getPessoas(){
    this.pessoasServie.getPessoas().subscribe(pessoa => {
      this.pessoasComponente = pessoa;
    })
  }
}
