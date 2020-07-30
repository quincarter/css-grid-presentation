import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingWithColumnsComponent } from './playing-with-columns.component';

describe('PlayingWithColumnsComponent', () => {
  let component: PlayingWithColumnsComponent;
  let fixture: ComponentFixture<PlayingWithColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingWithColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingWithColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
