import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-header-mobile',
  templateUrl: './menu-header-mobile.component.html',
  styleUrls: ['./menu-header-mobile.component.scss']
})
export class MenuHeaderMobileComponent implements OnInit {
  searchWidth: number = 830;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const innerWidth = window.innerWidth;
    this.searchWidth = innerWidth - 150 - 10;
  }
}
