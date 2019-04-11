import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorAngularComponent } from './contador-angular.component';

describe('ContadorAngularComponent', () => {
  let component: ContadorAngularComponent;
  let fixture: ComponentFixture<ContadorAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
