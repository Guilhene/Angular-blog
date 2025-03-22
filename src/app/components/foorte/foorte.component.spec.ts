import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorteComponent } from './foorte.component';

describe('FoorteComponent', () => {
  let component: FoorteComponent;
  let fixture: ComponentFixture<FoorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
