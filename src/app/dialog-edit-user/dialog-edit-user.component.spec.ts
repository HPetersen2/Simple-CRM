import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditUserComponent } from './dialog-edit-user.component';
import { NgIf } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent, MatButtonModule, MatProgressSpinnerModule, MatFormField, MatMenuModule, MatCardModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, NgIf, ActivatedRoute, NgModule],
      providers: [provideNativeDateAdapter, {
        provide: MatDialogRef,
        useValue: {}
      }, ActivatedRoute]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
