import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnyUserComponent } from './delete-any-user.component';

describe('DeleteAnyUserComponent', () => {
  let component: DeleteAnyUserComponent;
  let fixture: ComponentFixture<DeleteAnyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAnyUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAnyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
