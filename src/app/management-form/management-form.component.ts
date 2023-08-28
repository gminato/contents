import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css'],
})
export class ManagementFormComponent {
  appForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appForm = this.fb.group({
      file: ['', Validators.required],
      thumbnail: ['', Validators.required],
      displayName: ['', Validators.required],
      package: ['', Validators.required],
      description: ['', Validators.required],
      versionNumber: ['', Validators.required],
      developer: ['', Validators.required],
      playstoreUrl: [
        '',
        [Validators.required, Validators.pattern('https?://.+')],
      ],
      hashtags: [''],
    });
  }

  onSubmit(): void {
    if (this.appForm.valid) {
      const formData = this.appForm.value;
      // Here you can handle the form submission logic
      // For example, you can send the formData to a server or perform other actions.
    }
  }
}
