import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPlayingCardsComponent } from './flex-playing-cards.component';

describe('FlexPlayingCardsComponent', () => {
  let component: FlexPlayingCardsComponent;
  let fixture: ComponentFixture<FlexPlayingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexPlayingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPlayingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
