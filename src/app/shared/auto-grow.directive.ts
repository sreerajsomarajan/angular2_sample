import { Directive, ElementRef, Renderer, HostBinding } from '@angular/core'

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class AutoGrowDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostBinding('style.width.px') width:number = 120;

  onFocus() {
    this.width = 500;
  }

  onBlur() {
    this.width = 120;
  }

}
