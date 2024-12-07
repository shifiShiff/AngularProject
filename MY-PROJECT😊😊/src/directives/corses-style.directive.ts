import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCorsesStyle]',
  standalone: true
})
export class CorsesStyleDirective {

  @Input() subject:string=""

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    if(this.subject=="Computer")
      this.changeHighlight("blue");
      if(this.subject=="Math")
      this.changeHighlight("red");
      if(this.subject=="History")
      this.changeHighlight("pink");
      if(this.subject=="Graphic")
      this.changeHighlight("green");

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeHighlight('');
  }

  private changeHighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
