import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBackupComponent } from './app-backup.component';

describe('AppBackupComponent', () => {
  let component: AppBackupComponent;
  let fixture: ComponentFixture<AppBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
