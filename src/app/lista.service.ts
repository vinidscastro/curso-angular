import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  getLista(){
    return [{nome:'Vinicius', id:1}, {nome:'Gabriela', id:2}]
  }
}
