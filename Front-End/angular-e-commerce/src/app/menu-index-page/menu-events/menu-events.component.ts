import { Component, OnInit, Input } from '@angular/core';
import { ItemEvent } from 'src/app/class/models/ItemEvent';

@Component({
  selector: 'app-menu-events',
  templateUrl: './menu-events.component.html',
  styleUrls: ['./menu-events.component.scss']
})
export class MenuEventsComponent implements OnInit {
  @Input() itemEvent: ItemEvent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
