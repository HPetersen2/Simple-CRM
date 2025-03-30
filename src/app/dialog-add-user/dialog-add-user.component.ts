import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc, onSnapshot, addDoc  } from "firebase/firestore"; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './dialog-add-user.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  loading:boolean = false;

  firestore = inject(Firestore);
  userCollection = collection(this.firestore, 'users');


  user: User = {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: new Date(),
    street: "",
    zipCode: 0,
    city: "",
  }

  async saveUser() {
    this.loading = true;
    await addDoc(this.userCollection, {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate,
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city,
      email: this.user.email,
    });
    this.loading = false;
    this.dialogRef.close();
  }

  closeAddUser() {
    this.dialogRef.close();
  }
}
