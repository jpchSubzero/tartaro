import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  

  constructor(
    private element:ElementRef
  ) { 
    this.highLight('yellow');
  }

  @Input("appHighlight") newColor:string = '';

  @HostListener('mouseenter') mouseOver() {
    this.highLight( this.newColor || 'red');
  }

  @HostListener('mouseleave') mouseOut() {
    this.highLight('yellow');
  }

  highLight(color:string) {
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.padding = '10px';
  }
}
