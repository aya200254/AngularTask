import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

private highlight(color: string | null) {
    if (color) {
      this.el.nativeElement.style.backgroundColor = color;
    } else {
     
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
}
