import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementFormComponent } from './management-form/management-form.component';
import { WallpaperManagementFormComponent } from './wallpaper-management-form/wallpaper-management-form.component';
import { MatSelectModule } from '@angular/material/select';
import { TunesManagementFormComponent } from './tunes-management-form/tunes-management-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TunesIngestionFormComponent } from './tunes-management-form/tunes-management-form.component';
import { WallpaperIngestionFormComponent } from './wallpaper-management-form/wallpaper-management-form.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

// Import this module

@NgModule({
  declarations: [
    AppComponent,
    ManagementFormComponent,
    WallpaperManagementFormComponent,
    TunesManagementFormComponent,
    TunesIngestionFormComponent,
    WallpaperIngestionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
