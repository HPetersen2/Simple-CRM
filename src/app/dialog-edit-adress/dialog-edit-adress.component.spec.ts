import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditAdressComponent } from './dialog-edit-adress.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAdressComponent, CommonModule, MatFormField, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatProgressSpinnerModule, MatDialogModule, ActivatedRoute, NgModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, MatDialog, ActivatedRoute]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
