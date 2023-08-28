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
import { TunesManagementFormComponent } from './tunes-management-form/tunes-management-form.component'; // Import this module

@NgModule({
  declarations: [
    AppComponent,
    ManagementFormComponent,
    WallpaperManagementFormComponent,
    TunesManagementFormComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
