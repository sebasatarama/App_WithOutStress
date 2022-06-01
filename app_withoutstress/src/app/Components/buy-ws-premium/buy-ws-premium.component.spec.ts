import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyWsPremiumComponent } from './buy-ws-premium.component';

describe('BuyWsPremiumComponent', () => {
  let component: BuyWsPremiumComponent;
  let fixture: ComponentFixture<BuyWsPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyWsPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyWsPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
