import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingWithRowsComponent } from './playing-with-rows.component';

describe('PlayingWithRowsComponent', () => {
  let component: PlayingWithRowsComponent;
  let fixture: ComponentFixture<PlayingWithRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingWithRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingWithRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
