import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-choose-language',
  templateUrl: './popup-choose-language.component.html',
  styleUrls: ['./popup-choose-language.component.scss']
})
export class PopupChooseLanguageComponent implements OnInit {
  languageChosen: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(valueLanguage: number) {
    this.languageChosen = valueLanguage;
  }
}
