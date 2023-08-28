import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesManagementFormComponent } from './tunes-management-form.component';

describe('TunesManagementFormComponent', () => {
  let component: TunesManagementFormComponent;
  let fixture: ComponentFixture<TunesManagementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunesManagementFormComponent]
    });
    fixture = TestBed.createComponent(TunesManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
