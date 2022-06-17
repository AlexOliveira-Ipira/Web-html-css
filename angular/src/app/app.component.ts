import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador = 0
  valorCOntagem = 5

  //Variavel para enviar os dados do TS para o HTML
  nome = 'Alex Oliveira'

  testo = ''

  pessoas = [
    {
      nome: 'Alex',
      sobrenome: 'Oliveira'
    },
    {
      nome: 'Luciane',
      sobrenome: 'Oliveira'
    },
    {
      nome: 'Samuel',
      sobrenome: 'Oliveira'
    },
    {
      nome: 'Davi',
      sobrenome: 'Oliveira'
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    let intervalo = setInterval(() => {
      this.contador++;
      if(this.contador > 10){
        clearInterval(intervalo)
        this.contador = 0
      }
    }, 1000)
  }
//Por se tratar de uma class JS pode ser passado parametro caso
  cliclou(): void{
    console.log(this.nome)
  }
}
