import { Directive, HostBinding, HostListener , Input} from '@angular/core';

@Directive({
  selector: '[diretivaInput]'
})
export class InputDirective {
  bg: any;
  // defaultColor: string = '';
  // highlightColor: string ='#ffdd00';

  @HostBinding('style.backgroundColor') get setColor(){
    return this.bg;
  };  
  @Input() defaultColor: string = 'lime';
  @Input() highlightColor: string = 'purple';

  @HostListener('mouseleave') onMouseLeave(){
    this.bg = this.defaultColor;
  }
  @HostListener('mouseenter') onMouseOver(){
    this.bg = this.highlightColor;
  }

  ngOnInit(){
    this.bg = this.defaultColor;
  }
  constructor() { }

}
