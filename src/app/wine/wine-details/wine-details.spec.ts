import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WineDetails} from './wine-details';

describe('WineDetails', () => {
  let component: WineDetails;
  let fixture: ComponentFixture<WineDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WineDetails]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WineDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
