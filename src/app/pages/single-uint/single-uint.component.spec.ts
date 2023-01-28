import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUintComponent } from './single-uint.component';

describe('SingleUintComponent', () => {
  let component: SingleUintComponent;
  let fixture: ComponentFixture<SingleUintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
