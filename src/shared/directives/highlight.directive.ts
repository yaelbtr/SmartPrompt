import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({ 
  selector: '[spHighlight]', 
  standalone: true 
})
export class HighlightDirective {
  @Input() spHighlight = '#e3f2fd';
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.spHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
