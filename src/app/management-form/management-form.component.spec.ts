import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementFormComponent } from './management-form.component';

describe('ManagementFormComponent', () => {
  let component: ManagementFormComponent;
  let fixture: ComponentFixture<ManagementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementFormComponent]
    });
    fixture = TestBed.createComponent(ManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
