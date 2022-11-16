import { Component, OnInit } from '@angular/core';
import { ItemCategory } from 'src/app/class/models/ItemCategory';
import { ItemCategorySubTwo } from 'src/app/class/models/ItemCategorySubTwo';
import { ItemCategorySubOne } from 'src/app/class/models/ItemCategorySubOne';

@Component({
  selector: 'app-popup-category-mobile',
  templateUrl: './popup-category-mobile.component.html',
  styleUrls: ['./popup-category-mobile.component.scss']
})
export class PopupCategoryMobileComponent implements OnInit {
  activeCheck: number;
  listCategory: ItemCategory[] = new Array();
  listCategorySubOne: ItemCategorySubOne[] = new Array();
  listCategorySubTwo: ItemCategorySubTwo[] = new Array();

  constructor() {
    this.activeCheck = 0;
    // Category 1
    let itemSubTwo1 = new ItemCategorySubTwo(1, "Tiểu thuyết");
    let itemSubTwo2 = new ItemCategorySubTwo(2, "Truyện Ngắn - Tản Văn");
    let itemSubTwo3 = new ItemCategorySubTwo(3, "Light Novel");
    let itemSubTwo4 = new ItemCategorySubTwo(4, "Ngôn Tình");
    let itemSubTwo5 = new ItemCategorySubTwo(5, "Demo");
    this.listCategorySubTwo.push(itemSubTwo1);
    this.listCategorySubTwo.push(itemSubTwo2);
    this.listCategorySubTwo.push(itemSubTwo3);
    this.listCategorySubTwo.push(itemSubTwo4);
    this.listCategorySubTwo.push(itemSubTwo5);
    let itemSubOne1 = new ItemCategorySubOne(1, "VĂN HỌC", this.listCategorySubTwo);

    let itemSubTwo6 = new ItemCategorySubTwo(6, "Tiểu thuyết");
    let itemSubTwo7 = new ItemCategorySubTwo(7, "Truyện Ngắn - Tản Văn");
    let itemSubTwo8 = new ItemCategorySubTwo(8, "Light Novel");
    let itemSubTwo9 = new ItemCategorySubTwo(9, "Ngôn Tình");
    let itemSubTwo10 = new ItemCategorySubTwo(10, "Demo");
    this.listCategorySubTwo.push(itemSubTwo6);
    this.listCategorySubTwo.push(itemSubTwo7);
    this.listCategorySubTwo.push(itemSubTwo8);
    this.listCategorySubTwo.push(itemSubTwo9);
    this.listCategorySubTwo.push(itemSubTwo10);
    let itemSubOne2 = new ItemCategorySubOne(2, "VĂN HỌC", this.listCategorySubTwo);

    let itemSubTwo11 = new ItemCategorySubTwo(11, "Tiểu thuyết");
    let itemSubTwo12 = new ItemCategorySubTwo(12, "Truyện Ngắn - Tản Văn");
    let itemSubTwo13 = new ItemCategorySubTwo(13, "Light Novel");
    let itemSubTwo14 = new ItemCategorySubTwo(14, "Ngôn Tình");
    let itemSubTwo15 = new ItemCategorySubTwo(15, "Demo");
    this.listCategorySubTwo.push(itemSubTwo11);
    this.listCategorySubTwo.push(itemSubTwo12);
    this.listCategorySubTwo.push(itemSubTwo13);
    this.listCategorySubTwo.push(itemSubTwo14);
    this.listCategorySubTwo.push(itemSubTwo15);
    let itemSubOne3 = new ItemCategorySubOne(3, "VĂN HỌC", this.listCategorySubTwo);

    let itemSubTwo16 = new ItemCategorySubTwo(16, "Tiểu thuyết");
    let itemSubTwo17 = new ItemCategorySubTwo(17, "Truyện Ngắn - Tản Văn");
    let itemSubTwo18 = new ItemCategorySubTwo(18, "Light Novel");
    let itemSubTwo19 = new ItemCategorySubTwo(19, "Ngôn Tình");
    let itemSubTwo20 = new ItemCategorySubTwo(20, "Demo");
    this.listCategorySubTwo.push(itemSubTwo16);
    this.listCategorySubTwo.push(itemSubTwo17);
    this.listCategorySubTwo.push(itemSubTwo18);
    this.listCategorySubTwo.push(itemSubTwo19);
    this.listCategorySubTwo.push(itemSubTwo20);
    let itemSubOne4 = new ItemCategorySubOne(4, "VĂN HỌC", this.listCategorySubTwo);

    this.listCategorySubOne.push(itemSubOne1);
    this.listCategorySubOne.push(itemSubOne2);
    this.listCategorySubOne.push(itemSubOne3);
    this.listCategorySubOne.push(itemSubOne4);

    let category1 = new ItemCategory(1, "Sách Trong Nước", "assets/image/common/popup/header/category/ico_sachtrongnuoc.svg", this.listCategorySubOne);
    let category2 = new ItemCategory(2, "FOREIGN BOOKS", "assets/image/common/popup/header/category/ico_foreignbooks.svg", this.listCategorySubOne);
    let category3 = new ItemCategory(3, "VPP - Dụng Cụ Học Sinh", "assets/image/common/popup/header/category/ico_VPP.svg", this.listCategorySubOne);
    let category4 = new ItemCategory(4, "Đồ Chơi", "assets/image/common/popup/header/category/ico_dochoi.svg", this.listCategorySubOne);
    let category5 = new ItemCategory(5, "Làm Đẹp - Sức Khỏe", "assets/image/common/popup/header/category/ico_lamdepsuckhoe.svg", this.listCategorySubOne);
    let category6 = new ItemCategory(6, "Hành Trang Đến Trường", "assets/image/common/popup/header/category/ico_hanhtrangdentruong.svg", this.listCategorySubOne);
    let category7 = new ItemCategory(7, "VPP - DCHS Theo Thương Hiệu", "assets/image/common/popup/header/category/ico_VPP.svg", this.listCategorySubOne);
    let category8 = new ItemCategory(8, "Đồ Chơi Theo Thương Hiệu", "assets/image/common/popup/header/category/ico_dochoi.svg", this.listCategorySubOne);
    let category9 = new ItemCategory(9, "Bách Hóa Online - Lưu Niệm", "assets/image/common/popup/header/category/ico_bachhoaonline.svg", this.listCategorySubOne);
    this.listCategory.push(category1);
    this.listCategory.push(category2);
    this.listCategory.push(category3);
    this.listCategory.push(category4);
    this.listCategory.push(category5);
    this.listCategory.push(category6);
    this.listCategory.push(category7);
    this.listCategory.push(category8);
    this.listCategory.push(category9);

  }

  ngOnInit(): void {
    this.activeCheck = 1;
  }

  removeAllClassActive() {
    
  }

  changeClassActive(index: number) {
    this.activeCheck = index;
  }

  changeCategoryDropDown(index: number) {
    let categorySelected = document.querySelector(`#item-main-${index}`) as HTMLElement;
    let categoryImgSelected = document.querySelector(`#item-main-img-${index}`) as HTMLImageElement;
    let categorySubSelected = document.querySelector(`#item-main-sub-${index}`);
    if (categorySubSelected.classList.contains('show')) {
      categorySelected.style.color = "#000000";
      categoryImgSelected.src = "assets/image/common/popup/header/category/ico_triangle_gray_down.svg"
      categorySubSelected.classList.remove('show');
    } else {
      categorySelected.style.color = "#C62128";
      categoryImgSelected.src = "assets/image/common/popup/header/category/ico_triangle_red_up.svg"
      categorySubSelected.classList.add('show');
    }
  }

}
