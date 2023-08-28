import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperManagementFormComponent } from './wallpaper-management-form.component';

describe('WallpaperManagementFormComponent', () => {
  let component: WallpaperManagementFormComponent;
  let fixture: ComponentFixture<WallpaperManagementFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallpaperManagementFormComponent]
    });
    fixture = TestBed.createComponent(WallpaperManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
