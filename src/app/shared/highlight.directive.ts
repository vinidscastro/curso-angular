import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  bg: any;
  // @HostListener('mouseenter') onMouseOver(){
  //   this.rend.setElementStyle(
  //     this.elRef.nativeElement,'background', '#ae5688'
  //   )
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.rend.setElementStyle(
  //     this.elRef.nativeElement,'background', 'none'
  //   )
  // }
  
  // @HostBinding('style.backgroundColor') bg: string; 
  @HostBinding('style.backgroundColor') get setColor(){
    return this.bg;
  };  
  
  @HostListener('mouseleave') onMouseLeave(){
    this.bg = ''
  }
  @HostListener('mouseenter') onMouseOver(){
    this.bg = '#dc45f2'
  }


  constructor(
    // private elRef: ElementRef, private rend : Renderer
    ) { }

}
