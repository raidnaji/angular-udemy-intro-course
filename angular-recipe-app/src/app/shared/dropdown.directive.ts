import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
        
    }

    ngOnInit() {

    }
    
    // @HostListener('click') onClick() {
    //     this.isOpen = !this.isOpen
    // }

    // this piece of code below closes the menu when clicking anywhere👇🏼
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}