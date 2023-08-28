import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tunes-management-form',
  templateUrl: './tunes-management-form.component.html',
  styleUrls: ['./tunes-management-form.component.css'],
})
export class TunesManagementFormComponent {
  musicHashtags: string[] = ['rock', 'pop', 'jazz', 'classical', 'hip-hop'];

  tunesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tunesForm = this.fb.group({
      file: [null, Validators.required],
      thumbnail: [null, Validators.required],
      fileName: ['', Validators.required],
      description: [''],
      album: [''],
      author: [''],
      hashtags: [[]],
    });
  }

  onTunesSubmit(): void {
    if (this.tunesForm.valid) {
      const formData = this.tunesForm.value;
      // Handle form submission logic for tunes management...
    }
  }
}
