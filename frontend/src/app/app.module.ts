import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from "@angular/material/dialog";;
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';


import { HttpClientModule } from '@angular/common/http';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { Info2Component } from './info2/info2.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { AuthGuard } from './auth.guard';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const appRoutes: Routes = [
 
  { path: 'home', 
    component: FormsComponent 
  },
  {
    path: 'info',
    component: InfoComponent, 
    canActivate : [AuthGuard]
  },
  {
    path: 'info2',
    component: Info2Component,
    canActivate : [AuthGuard]
    
  }, 
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'info3',
    component: MatDialogComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent, 
    InfoComponent, Info2Component, MatDialogComponent
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule ,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatStepperModule,
    MatPaginatorModule,
    MatRadioModule,
    MatToolbarModule, 
    MatMenuModule,
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'}),
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatAutocompleteModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
