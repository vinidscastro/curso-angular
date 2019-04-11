import { Component, OnInit } from '@angular/core';

import { ListaService } from '../lista.service';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent implements OnInit {

    nomePortal: string;
  //variavel: tipo da variável;
  
  cursos: string[] = ['Java', 'Angular', 'Bootstrap']
//varivel: tipo da variavel []indica que é um array '=' inicia variável [1,2,3] array de elementos
  
  lista: Object;
  //Variável do tipo Object permite que o valor seja um Json 

  
  constructor(private data: ListaService) {
    this.nomePortal = 'xxx';
   }
   
  ngOnInit() {
    this.lista = this.data.getLista()
    //atribui o valor retornado na função getLista do serviço para dentro da variável lista
  }
}
