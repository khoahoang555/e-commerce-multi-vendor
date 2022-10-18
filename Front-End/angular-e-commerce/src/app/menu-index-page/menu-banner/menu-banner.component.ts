import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-banner',
  templateUrl: './menu-banner.component.html',
  styleUrls: ['./menu-banner.component.scss']
})
export class MenuBannerComponent implements OnInit {
  //bannerWidth: number = 830;
  //bannerHeight: number = 320;

  constructor() { }

  ngOnInit(): void {
  //  this.onResize();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   const innerWidth = window.innerWidth;
  //   const innerHeight = window.innerHeight;
  //   if (innerWidth < 980) {
  //     this.bannerWidth = innerWidth - 60 - 10;
  //     this.bannerHeight = innerHeight - 34 - 10;
  //   }
  // }

}
