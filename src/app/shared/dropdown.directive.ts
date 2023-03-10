import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  ngOnInit(): void {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
