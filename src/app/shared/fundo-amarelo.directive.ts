import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
  // selector: 'p[fundoAmarelo]'
  // é possível delimitar a diretiva ao uso de tags específicas

})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    // console.log(this.elementRef)
    // this.elementRef.nativeElement.style.backgroundColor = '#ffcde2'
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', '#fcde61')
    // será que elementRef e renderer são realmente necessários?
  }

}
