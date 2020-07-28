import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCardsComponent } from './playing-cards.component';

describe('PlayingCardsComponent', () => {
  let component: PlayingCardsComponent;
  let fixture: ComponentFixture<PlayingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
