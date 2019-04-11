import { Component, OnInit, DoCheck, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy {

  @Input() valorInicial:number = 10;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnchanges');
  }

  ngOnDestroy(){
    console.log('Destruido');
  }
  private log(hook: string){
    console.log(hook);
  }
}
