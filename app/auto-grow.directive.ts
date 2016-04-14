import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){
        
    }
    onfocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '300');
    }
    
    onblur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}