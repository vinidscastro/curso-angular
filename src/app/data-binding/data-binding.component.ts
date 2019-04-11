import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://viniciuscastro.dev';
  valor: string = '';
  campo = new FormControl('Nome vai aqui');
  nomeCurso: string = 'Angular';
  //variável comum 

  valorInicial: number = 15;
  

  getValor(){
    return 5*2;
  }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert('xxxx');
  }

  onMudouValor(event){
    
  }

  // onKeyUp(event: KeyboardEvent){
  //   this. valor = ((<HTMLInputElement>event.target).value);
  // }

  mostrar(valueInput){
    this.valor = valueInput
  }


}
