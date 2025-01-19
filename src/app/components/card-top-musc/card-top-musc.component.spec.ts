import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopMuscComponent } from './card-top-musc.component';

describe('CardTopMuscComponent', () => {
  let component: CardTopMuscComponent;
  let fixture: ComponentFixture<CardTopMuscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTopMuscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopMuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
