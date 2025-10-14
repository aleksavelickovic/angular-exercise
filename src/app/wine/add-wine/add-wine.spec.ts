import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddWine} from './add-wine';

describe('AddWine', () => {
  let component: AddWine;
  let fixture: ComponentFixture<AddWine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWine]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddWine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
