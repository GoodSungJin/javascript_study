import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPageScroll]'
})
export class PageScrollDirective {

  constructor(public elem: ElementRef, public renderer: Renderer2) { }

  @HostListener('window:scroll') handler() {
    if (!window.pageYOffset) this.renderer.setStyle(this.elem.nativeElement, 'display', 'none');
    if (window.pageYOffset) this.renderer.setStyle(this.elem.nativeElement, 'display', 'block');
  }

  @HostListener('click') handler2() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log(this.elem, this.renderer);
  }


}
