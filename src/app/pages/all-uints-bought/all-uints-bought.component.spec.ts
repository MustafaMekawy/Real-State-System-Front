import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUintsBoughtComponent } from './all-uints-bought.component';

describe('AllUintsBoughtComponent', () => {
  let component: AllUintsBoughtComponent;
  let fixture: ComponentFixture<AllUintsBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUintsBoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUintsBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
