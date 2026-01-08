import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({ selector: '[spHighlight]', standalone: true })
export class HighlightDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#e3f2fd';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
