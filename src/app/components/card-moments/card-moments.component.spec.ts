import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMomentsComponent } from './card-moments.component';

describe('CardMomentsComponent', () => {
  let component: CardMomentsComponent;
  let fixture: ComponentFixture<CardMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMomentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
