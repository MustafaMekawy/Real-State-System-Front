import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UintsComponent } from './uints.component';

describe('UintsComponent', () => {
  let component: UintsComponent;
  let fixture: ComponentFixture<UintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
