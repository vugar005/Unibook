import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[classToggle]'
})
export class ClassToggleDirective {
  @Input() classToggle: string;
  @Input() isActive: boolean;
  @HostListener('click') onClick() {
    this.toggleClass();
  }
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  toggleClass() {
    console.log(this.classToggle)
    if (!this.isActive) {
      this.renderer.addClass(this.element.nativeElement, this.classToggle);
      this.isActive = true;
    } else {
      this.renderer.removeClass(this.element.nativeElement, this.classToggle);
      this.isActive = false;
    }
  }
}
