import { Component, OnInit, Input } from '@angular/core';
import { ItemInfo } from '../class/models/ItemInfo';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() product: ItemInfo;
  @Input() idEvent: number;

  constructor() { }

  ngOnInit(): void {
  }

  startRatingLoop(start: number) {
    return new Array(start);
  }

}
