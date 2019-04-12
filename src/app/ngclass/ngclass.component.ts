import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  meuFavorito: boolean = false;
  meuLike: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onFavorito(){
    this.meuFavorito = !this.meuFavorito;
    
  }

  onLike(){
    this.meuLike = !this.meuLike;
  }

}
