import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-management-form',
  templateUrl: './management-form.component.html',
  styleUrls: ['./management-form.component.css'],
})
export class ManagementFormComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(types: string) {
    let dialogRef;
    if (types === 'application') {
      dialogRef = this.dialog.open(SoftwareManagementFormComponent);
    } else if (types === 'tunes') {
      dialogRef = this.dialog.open(TunesIngestionFormComponent);
    } else {
      dialogRef = this.dialog.open(WallpaperIngestionFormComponent);
    }
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-app-ingestion-form',
  templateUrl: './app-ingestion-form.html',
  styleUrls: ['./management-form.component.css'],
})
export class SoftwareManagementFormComponent {
  hashtagOptions: string[] = ['nature', 'art', 'abstract', 'photography']; // Example hashtag
  appForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ManagementFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.appForm = this.formBuilder.group({
      appname: ['', Validators.required],
      type: ['apk', Validators.required],
      file: ['', [Validators.required, this.fileValidator]],
      icon: [''],
      label: [''],
      description: [''],
      rating: [
        0.0,
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
      price: [''],
      downloads: [''],
      size: [''],
      apptype: [''],
    });
  }

  fileValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/\.apk$/)) {
      return { invalidExtension: true };
    }
    return null;
  }

  // Submit function
  onSubmit() {
    if (this.appForm.valid) {
      console.log(this.appForm.value);
      // Perform further actions, e.g., sending data to a server
    } else {
      // Handle form errors
    }
  }
}

@Component({
  selector: 'app-tunes-ingestion-form',
  templateUrl: 'tunes-ingestion-form.html',
  styleUrls: ['./management-form.component.css'],
})
export class TunesIngestionFormComponent {
  musicHashtags: string[] = ['rock', 'pop', 'jazz', 'classical', 'hip-hop'];
  tunesForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ManagementFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
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

@Component({
  selector: 'app-wallpaper-ingestion-form',
  templateUrl: 'wallpaper-ingestion-form.html',
  styleUrls: ['./management-form.component.css'],
})
export class WallpaperIngestionFormComponent {
  hashtagOptions: string[] = ['nature', 'art', 'abstract', 'photography']; // Example hashtag
  wallpaperForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ManagementFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
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
