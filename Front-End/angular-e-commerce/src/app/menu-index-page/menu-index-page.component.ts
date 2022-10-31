import { Component, OnInit } from '@angular/core';
import { ItemEvent } from '../class/models/ItemEvent';

@Component({
  selector: 'app-menu-index-page',
  templateUrl: './menu-index-page.component.html',
  styleUrls: ['./menu-index-page.component.scss']
})
export class MenuIndexPageComponent implements OnInit {
  arrItemEvents : ItemEvent[] = [];

  constructor() { }

  ngOnInit(): void {
    this.arrItemEvents = [
      new ItemEvent(
        1, 'FLASH SALE', 1, 'assets/image/common/flash-sale/ico_flashsale@3x.png', '2022-10-28 15:30:27'
      ),
      new ItemEvent(
        2, 'XU HƯỚNG MUA SẮM', 2, 'assets/image/common/trending/ico_dealhot.png'
      ),
      new ItemEvent(
        3, 'Demo', 1, 'assets/image/common/flash-sale/ico_flashsale@3x.png', '2022-10-28 15:30:27'
      ),
      // new ItemEvent(
      //   'Gợi Ý Hôm Nay', 3
      // )
    ]
  }

}
