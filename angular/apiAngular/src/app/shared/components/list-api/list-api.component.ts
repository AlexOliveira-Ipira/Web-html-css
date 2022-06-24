import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  listaPersonaens: Array<any> = []

  constructor(private _ListService: ListService) { }

  ngOnInit(): void {
    this.getlist()
  }

  getlist(){
    this._ListService.getList().subscribe((result) => {
      this.listaPersonaens = result?.results;
      console.log(this.listaPersonaens)
    })
  }
}
