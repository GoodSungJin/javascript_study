import { Directive, ElementRef, Renderer2, HostListener, ErrorHandler } from '@angular/core';

@Directive({
  selector: '[appTextBlue]',
})
export class TextBlueDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    console.log(TextBlueDirective);
    console.log(el, renderer)
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseenter') handler1() {
    this.setColor('blue');
  }

  @HostListener('mouseleave') handler2() {
    this.setColor(null);
  }

  @HostListener('window:scroll') handler3() {
    console.log(window.pageYOffset);
  }

  setColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
