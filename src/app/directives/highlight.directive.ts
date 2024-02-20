import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private domEle:ElementRef) { 
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.getHighlight(this.appHighlight || "yellow");
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.getHighlight("");
  }
  private getHighlight(color:string){
    this.domEle.nativeElement.style.backgroundColor = color; 
    this.domEle.nativeElement.style.color = "black"; 
  }
}
