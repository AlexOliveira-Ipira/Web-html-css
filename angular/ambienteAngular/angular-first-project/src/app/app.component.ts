import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0
  nome = 'Alex Borges de Oliveira'
  textTowWayDataBind = ''
  
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
      nome:'Samuel',
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
    let interval = setInterval(()=>{
      this.count ++
      if (this.count ===20){
        clearInterval(interval)
      }
    }, 1000);}

  Clicou(nomeFuncao: string){
     console.log(nomeFuncao)
    }
  }


