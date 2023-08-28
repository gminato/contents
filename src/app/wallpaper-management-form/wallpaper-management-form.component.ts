import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallpaper-management-form',
  templateUrl: './wallpaper-management-form.component.html',
  styleUrls: ['./wallpaper-management-form.component.css'],
})
export class WallpaperManagementFormComponent {
  hashtagOptions: string[] = ['nature', 'art', 'abstract', 'photography']; // Example hashtags

  wallpaperForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.wallpaperForm = this.fb.group({
      file: [null, Validators.required],
      thumbnail: [null, Validators.required],
      filename: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      hashtags: [[]],
    });
  }

  onWallpaperSubmit(): void {
    if (this.wallpaperForm.valid) {
      const formData = this.wallpaperForm.value;
      // Handle form submission logic for wallpaper management...
    }
  }
}
