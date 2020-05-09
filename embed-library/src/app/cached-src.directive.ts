import {Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: 'iframe'
})
export class CachedSrcDirective {

    @Input() 
    public get cachedSrc(): string {
        return this.elRef.nativeElement.src;
    }
    public set cachedSrc(src: string) {
        if (this.elRef.nativeElement.src !== src) {
            this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
        }
    }

    constructor(
        private elRef: ElementRef,
        private renderer : Renderer2
        ) { }
}