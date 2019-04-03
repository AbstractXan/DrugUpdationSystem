import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneComponent } from './find-one.component';

describe('FindOneComponent', () => {
  let component: FindOneComponent;
  let fixture: ComponentFixture<FindOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
