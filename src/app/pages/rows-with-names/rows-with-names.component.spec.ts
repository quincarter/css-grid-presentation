import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsWithNamesComponent } from './rows-with-names.component';

describe('RowsWithNamesComponent', () => {
  let component: RowsWithNamesComponent;
  let fixture: ComponentFixture<RowsWithNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsWithNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsWithNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
