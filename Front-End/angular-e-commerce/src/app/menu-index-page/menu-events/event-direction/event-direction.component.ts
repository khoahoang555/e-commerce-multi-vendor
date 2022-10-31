import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-direction',
  templateUrl: './event-direction.component.html',
  styleUrls: ['./event-direction.component.scss']
})
export class EventDirectionComponent implements OnInit {
  @Input() idEvent: number;

  constructor() { }

  ngOnInit(): void {
  }

}
