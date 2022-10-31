import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBodyComponent } from './event-body.component';

describe('EventBodyComponent', () => {
  let component: EventBodyComponent;
  let fixture: ComponentFixture<EventBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
