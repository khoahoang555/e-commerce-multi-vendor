import { Component, OnInit } from '@angular/core';
import {ItemInfo} from 'src/app/class/models/ItemInfo';

@Component({
  selector: 'app-menu-flash-sale',
  templateUrl: './menu-flash-sale.component.html',
  styleUrls: ['./menu-flash-sale.component.scss']
})
export class MenuFlashSaleComponent implements OnInit {
  arrDemo: ItemInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.arrDemo = [
    //   {
    //     'name': 'Komi - Nữ Thần Sợ Giao Tiếp - Tập 14 - Tặng Kèm Photostrip',
    //     'price': '26.600',
    //     'discount-number': 35,
    //     'discount-price': '67.000',
    //     'rating': 4,
    //     'total-rating': 35,
    //     'sold': 45
    //   },
    //   'Komi - Nữ Thần Sợ Giao Tiếp - Tập 14 - Tặng Kèm Photostrip',
    //   '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật',
    //   'Vẽ Vời Vẩn Vơ - Tập 5',
    //   'Kaguya-Sama: Cuộc Chiến Tỏ Tình - Tập 3 - Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh',
    //   '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật',
    //   'Kinh Doanh - Khái Lược Những Tư Tưởng Lớn'
    // ]
    this.arrDemo = [
      new ItemInfo(
        'Komi - Nữ Thần Sợ Giao Tiếp - Tập 14 - Tặng Kèm Photostrip', 26600, 35, 67000, 4, 20, 40
      ),
      new ItemInfo(
        '666 Satan - Tập 1 - Tặng Kèm Bookmark Nhân Vật', 30000, 25, 67000, 4, 20, 40
      ),
      new ItemInfo(
        'Vẽ Vời Vẩn Vơ - Tập 5', 30000, 25, 67000, 4, 20, 40
      ),
      new ItemInfo(
        'Kinh Doanh - Khái Lược Những Tư Tưởng Lớn', 30000, 25, 67000, 4, 20, 40
      ),
      new ItemInfo(
        'Kaguya-Sama: Cuộc Chiến Tỏ Tình - Tập 3 - Tặng Kèm 1 Trong 2 Mẫu Thẻ Học Sinh', 30000, 25, 67000, 4, 20, 40
      ),
      new ItemInfo(
        'Thám Tử Lừng Danh Conan - Tập 99', 30000, 25, 67000, 4, 20, 40
      )
    ]
  }

}
