import { Component, OnInit, Input } from '@angular/core';
import { ItemEvent } from 'src/app/class/models/ItemEvent';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {
  @Input() itemEvent: ItemEvent;
  headerColor: string;

  constructor() { }

  ngOnInit(): void {
    this.changeColorHeader();
  }

  changeColorHeader() {
    switch(this.itemEvent.type) {
      case 1:
        this.headerColor = "#fcdab0";
        break;
      case 2: 
        this.headerColor = "#fcddef";
        break;
      default:
        this.headerColor = "#ffffff";
    }
  }

}
