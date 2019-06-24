import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextcolorDirective {
  @Input() color: string;

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('mouseenter') handler1() {
    this.setColor(this.color);
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
