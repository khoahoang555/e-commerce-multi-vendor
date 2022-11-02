import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ItemEvent } from 'src/app/class/models/ItemEvent';
import { ItemInfo } from 'src/app/class/models/ItemInfo';

@Component({
  selector: 'app-menu-events',
  templateUrl: './menu-events.component.html',
  styleUrls: ['./menu-events.component.scss']
})
export class MenuEventsComponent implements OnInit, AfterViewInit {
  @Input() itemEvent: ItemEvent;
  arrDemo: ItemInfo[] = [];
  widthItemChanged: number = 0;
  @ViewChild('container') container: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
    this.arrDemo = [
      new ItemInfo(
        'Komi - Nữ Thần Sợ Giao Tiếp - Tập 14 - Tặng Kèm Photostrip', 26600, 3, 14, 11, 4
      ),
      new ItemInfo(
        '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật', 30000, 4, 24, 20, 25, 25, 67000
      ),
      new ItemInfo(
        'Vẽ Vời Vẩn Vơ - Tập 5', 45000, 5, 23, 3, 50, 11, 55000
      ),
      new ItemInfo(
        'Kinh Doanh - Khái Lược Những Tư Tưởng Lớn', 55000, 2, 17, 40, 30, 11, 70000
      ),
      new ItemInfo(
        'Kaguya-Sama: Cuộc Chiến Tỏ Tình - Tập 3 - Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh', 61000, 4, 11, 25, 10, 11, 71000
      ),
      new ItemInfo(
        'Thám Tử Lừng Danh Conan - Tập 99', 33000, 2, 3, 11, 5, 15, 50000
      ),
      new ItemInfo(
        'Thám Tử Lừng Danh Conan - Tập 99', 33000, 2, 3, 11, 5, 15, 50000
      ),
      new ItemInfo(
        'Thám Tử Lừng Danh Conan - Tập 99', 33000, 2, 3, 11, 5, 15, 50000
      ),
      new ItemInfo(
        'Thám Tử Lừng Danh Conan - Tập 99', 33000, 2, 3, 11, 5, 15, 50000
      )
    ];
  }

  ngAfterViewInit(): void {
    console.log(this.container.nativeElement.offsetWidth);
  }

  itemChanged(sliderIndex: number) {
    this.widthItemChanged = sliderIndex;
  }
}
