import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-wallpaper-management-form',
  templateUrl: './wallpaper-management-form.component.html',
  styleUrls: ['./wallpaper-management-form.component.css'],
})
export class WallpaperManagementFormComponent implements OnInit {
  dataSource;
  appArray = [
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

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = ['AppName', 'AppType', 'UploadedBy', 'Status'];

  ngOnInit(): void {
    this.dataSource = this.appArray;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WallpaperIngestionFormComponent, {
      width: '50vw',
      data: { undefined },
    });
  }
}

@Component({
  selector: 'app-wallpaper-ingestion-form',
  templateUrl: 'wallpaper-ingestion-form.html',
  styleUrls: ['./wallpaper-management-form.component.css'],
})
export class WallpaperIngestionFormComponent {
  hashtagOptions: string[] = ['nature', 'art', 'abstract', 'photography']; // Example hashtag
  wallpaperForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<WallpaperManagementFormComponent>,
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
