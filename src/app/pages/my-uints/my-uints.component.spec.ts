import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUintsComponent } from './my-uints.component';

describe('MyUintsComponent', () => {
  let component: MyUintsComponent;
  let fixture: ComponentFixture<MyUintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
