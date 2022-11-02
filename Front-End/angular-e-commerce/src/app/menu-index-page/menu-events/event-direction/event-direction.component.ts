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
    this.disableBtnNextEvent();
    this.disableBtnBackEvent();
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
    this.enableBtnNextEvent();
    this.disableBtnBackEvent();
  }

  enableBtnBackEvent() {
    this.enableBtnBack = true;
  }
  
  disableBtnNextEvent() {
    const container = <HTMLElement>document.querySelector('.common-container');
    const widthContainer = container.offsetWidth;
    let widthTotalItem = this.lengthItem * 244;
        
    if (((widthContainer + this.sliderIndex) >= widthTotalItem) || (widthTotalItem == 0)) {
        this.enableBtnNext = false;
    }
  }

  enableBtnNextEvent() {
    this.enableBtnNext = true;
  }
  
  disableBtnBackEvent() {
    if (this.sliderIndex === 0) {
      this.enableBtnBack = false;
    }
  }
}
