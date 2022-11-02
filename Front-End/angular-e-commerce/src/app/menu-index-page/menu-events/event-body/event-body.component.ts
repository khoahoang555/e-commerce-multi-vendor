import { Component, OnInit, Input } from '@angular/core';
import { ItemInfo } from 'src/app/class/models/ItemInfo';
import * as $ from 'jquery';

@Component({
  selector: 'app-event-body',
  templateUrl: './event-body.component.html',
  styleUrls: ['./event-body.component.scss']
})
export class EventBodyComponent implements OnInit {
  @Input() type: number;
  @Input() arrItem: ItemInfo[];
  @Input() widthItemChanged: number;

  constructor() { }

  ngOnInit(): void {
    // $(document).ready(function() {
    //   console.log($('.body-btn-fl').text());
    // })
  }

}
