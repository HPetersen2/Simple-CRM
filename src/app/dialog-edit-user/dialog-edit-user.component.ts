import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { User } from '../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormField } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatButtonModule, MatProgressSpinnerModule, MatFormField, MatMenuModule, MatCardModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, NgIf],
  templateUrl: './dialog-edit-user.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  
  constructor(private route: ActivatedRoute, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  userData = new User();
  firestore = inject(Firestore);

  userId = '';
  protected loading = false;

  closeEditUser() {
    this.dialogRef.close(DialogEditUserComponent)
  }

  async saveUser() {
        this.loading = true;
        await setDoc(doc(this.firestore, "users", this.userId), {
          firstName: this.userData.firstName,
          lastName: this.userData.lastName,
          email: this.userData.email,
          birthDate: this.userData.birthDate,
          street: this.userData.street,
          zipCode: this.userData.zipCode,
          city: this.userData.city,
        });
        this.loading = false;
        this.dialogRef.close(DialogEditUserComponent);
      }
}

