import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  
  @Input() nome: string ='';
  //Aqui é definido que nome vai ser recebido como propriedade = passa a ter a saída 'nome' 

  constructor() { }

  ngOnInit() {
  }

}
