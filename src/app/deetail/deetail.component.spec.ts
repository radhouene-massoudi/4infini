import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeetailComponent } from './deetail.component';

describe('DeetailComponent', () => {
  let component: DeetailComponent;
  let fixture: ComponentFixture<DeetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
