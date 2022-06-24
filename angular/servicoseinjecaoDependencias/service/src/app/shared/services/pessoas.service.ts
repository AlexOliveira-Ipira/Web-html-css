import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  getPessoas(): Observable<any>{
    let pessoasArray = [
      {
        nome: 'Alex',
        sobrenome: 'Oliveira',
        idade: 47
      } ,
      {
        nome: 'Luciane',
        sobrenome:'Oliveira',
        idade: 51
      },
      {
        nome: 'Samuel',
        sobrenome: 'Oliveira',
        idade: 13
      },
      {
        nome: 'Davi',
        sobrenome: 'Oliveira',
        idade: 12
      },
    ]
    return of(pessoasArray)
  }
}
