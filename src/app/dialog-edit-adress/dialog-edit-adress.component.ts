import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { onSnapshot, doc, setDoc } from '@firebase/firestore';
import { ActivatedRoute } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [CommonModule, MatFormField, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  constructor(private route: ActivatedRoute, public dialogRef: MatDialogRef<DialogEditAdressComponent>) {}

  protected loading:boolean = false;

  firestore = inject(Firestore);

  userId:any = '';
  userData = new User();

  closeEditAdress() {
    this.dialogRef.close(DialogEditAdressComponent);
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
    this.dialogRef.close(DialogEditAdressComponent);
  }
}
