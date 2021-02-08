import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaistBeltsComponent } from './waist-belts.component';

describe('WaistBeltsComponent', () => {
  let component: WaistBeltsComponent;
  let fixture: ComponentFixture<WaistBeltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistBeltsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaistBeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
