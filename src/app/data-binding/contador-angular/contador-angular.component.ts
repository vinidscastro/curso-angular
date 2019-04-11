import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-contador-angular',
  templateUrl: './contador-angular.component.html',
  styleUrls: ['./contador-angular.component.scss']
})
export class ContadorAngularComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  novoValor: number = 0;
  //EventEmitter vai emitir eventos para outro componente que esteja associado ao componente onde foi declarado
  //Precisa ser Importado 

  //@Output Dispara um evento para Elemento associado (componente Pai nesse caso)
  
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    // console.log(this.campoValorInput.nativeElement);
    // this.valor++
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
    this.novoValor = this.campoValorInput.nativeElement.value;
  }

  
  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value} );
    this.novoValor = this.campoValorInput.nativeElement.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
