import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioComponent } from './incio.component';

describe('IncioComponent', () => {
  let component: IncioComponent;
  let fixture: ComponentFixture<IncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
