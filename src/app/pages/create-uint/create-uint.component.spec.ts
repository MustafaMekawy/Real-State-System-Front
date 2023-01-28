import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUintComponent } from './create-uint.component';

describe('CreateUintComponent', () => {
  let component: CreateUintComponent;
  let fixture: ComponentFixture<CreateUintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
