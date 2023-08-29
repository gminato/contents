import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

export interface AppInfo {
  AppName: string;
  AppType: string;
  UploadedBy: string;
  Status: string; // You can add more status options as needed
}

@Component({
  selector: 'app-tunes-management-form',
  templateUrl: './tunes-management-form.component.html',
  styleUrls: ['./tunes-management-form.component.css'],
})
export class TunesManagementFormComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  dataSource: AppInfo[];
  appArray: AppInfo[] = [
    {
      AppName: 'App1',
      AppType: 'APK',
      UploadedBy: 'John Doe',
      Status: 'Published',
    },
    {
      AppName: 'App2',
      AppType: 'Other Type',
      UploadedBy: 'Jane Smith',
      Status: 'Draft',
    },
    {
      AppName: 'App3',
      AppType: 'APK',
      UploadedBy: 'Alice Johnson',
      Status: 'Published',
    },
    {
      AppName: 'App4',
      AppType: 'Other Type',
      UploadedBy: 'Bob Williams',
      Status: 'Published',
    },
  ];

  displayedColumns: string[] = ['AppName', 'AppType', 'UploadedBy', 'Status'];

  ngOnInit(): void {
    this.dataSource = this.appArray;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TunesIngestionFormComponent, {
      width: '50vw',
      data: { undefined },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-tunes-ingestion-form',
  templateUrl: 'tunes-ingestion-form.html',
  styleUrls: ['tunes-management-form.component.css'],
})
export class TunesIngestionFormComponent {
  musicHashtags: string[] = ['rock', 'pop', 'jazz', 'classical', 'hip-hop'];
  tunesForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TunesManagementFormComponent>,
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
