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

  openDialog() {
    const dialogRef = this.dialog.open(SoftwareManagementFormComponent);

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
