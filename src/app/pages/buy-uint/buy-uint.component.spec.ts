import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyUintComponent } from './buy-uint.component';

describe('BuyUintComponent', () => {
  let component: BuyUintComponent;
  let fixture: ComponentFixture<BuyUintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyUintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyUintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
