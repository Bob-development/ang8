import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavermasComponent } from './shavermas.component';

describe('ShavermasComponent', () => {
  let component: ShavermasComponent;
  let fixture: ComponentFixture<ShavermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShavermasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShavermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
