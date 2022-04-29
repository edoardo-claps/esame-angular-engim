import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatDetailsComponent } from './contat-details.component';

describe('ContatDetailsComponent', () => {
  let component: ContatDetailsComponent;
  let fixture: ComponentFixture<ContatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
