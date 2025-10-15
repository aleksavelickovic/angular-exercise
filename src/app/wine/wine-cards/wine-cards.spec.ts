import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WineCards} from './wine-cards';

describe('WineCards', () => {
  let component: WineCards;
  let fixture: ComponentFixture<WineCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WineCards]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WineCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
