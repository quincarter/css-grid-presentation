import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFrComponent } from './understanding-fr.component';

describe('UnderstandingFrComponent', () => {
  let component: UnderstandingFrComponent;
  let fixture: ComponentFixture<UnderstandingFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
