import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUintsAvalibleComponent } from './all-uints-avalible.component';

describe('AllUintsAvalibleComponent', () => {
  let component: AllUintsAvalibleComponent;
  let fixture: ComponentFixture<AllUintsAvalibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUintsAvalibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUintsAvalibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
