import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-event-direction',
  templateUrl: './event-direction.component.html',
  styleUrls: ['./event-direction.component.scss']
})
export class EventDirectionComponent implements OnInit {
  @Input() lengthItem: number;
  @Output() sliderIndexChanged = new EventEmitter<number>(); 
  @ViewChild('container') container: ElementRef;
  sliderIndex: number;
  enableBtnBack: boolean = true;
  enableBtnNext: boolean = true;

  constructor() { 
    this.sliderIndex = 0;
  }

  ngOnInit(): void {
  }

  nextItemEvent() {
    this.sliderIndex += 244;
    this.sliderIndexChanged.emit(this.sliderIndex);
    this.enableBtnBackEvent();
    this.disableBtnNextEvent();
  }

  backItemEvent() {
    this.sliderIndex -= 244;
    this.sliderIndexChanged.emit(this.sliderIndex);
  }

  enableBtnBackEvent() {
    this.enableBtnBack = true;
  }
  
  disableBtnNextEvent() {
   
  }

  enableBtnNextEvent() {

  }
  
  disableBtnBackEvent() {

  }
}
