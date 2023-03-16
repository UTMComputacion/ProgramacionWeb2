import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiasComponent } from './membresias.component';

describe('MembresiasComponent', () => {
  let component: MembresiasComponent;
  let fixture: ComponentFixture<MembresiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
