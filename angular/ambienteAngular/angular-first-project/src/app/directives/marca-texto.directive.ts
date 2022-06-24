import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';
  
  constructor(private _elemento: ElementRef) { }

  ngOnInit(): void {
    this.mudarFundo()
  }

  private mudarFundo(cor: string = 'yellow'){
    this._elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor
    this._elemento.nativeElement.style.color = this.corDoTexto || cor
    this._elemento.nativeElement.style.fontWeight = 'bold'
  }
}

