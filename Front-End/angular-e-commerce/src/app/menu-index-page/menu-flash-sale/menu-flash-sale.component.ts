import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-flash-sale',
  templateUrl: './menu-flash-sale.component.html',
  styleUrls: ['./menu-flash-sale.component.scss']
})
export class MenuFlashSaleComponent implements OnInit {
  arrDemo: any;

  constructor() { }

  ngOnInit(): void {
    this.arrDemo = [
      'Komi - Nữ Thần Sợ Giao Tiếp - Tập 14 - Tặng Kèm Photostrip',
      '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật',
      'Vẽ Vời Vẩn Vơ - Tập 5',
      'Kaguya-Sama: Cuộc Chiến Tỏ Tình - Tập 3 - Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh',
      '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật',
      'Kinh Doanh - Khái Lược Những Tư Tưởng Lớn'
    ]
  }

}
