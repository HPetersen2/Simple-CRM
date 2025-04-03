import { Component, inject } from '@angular/core';
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
import { User } from '../interfaces/user';

@Component({
  selector: 'app-dialog-edit-adress',
  standalone: true,
  imports: [CommonModule, MatFormField, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  constructor(private route: ActivatedRoute, public dialogRef: MatDialogRef<DialogEditAdressComponent>) {}

  protected loading:boolean = false;

  firestore = inject(Firestore);

  userId:any = '';
  userData:any = [];

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
    });

    const unsub = onSnapshot(doc(this.firestore, "users", this.userId), (doc) => {
      this.userData = doc.data();
    });
  }

  closeEditAdress() {
    this.dialogRef.close(DialogEditAdressComponent);
  }


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
    await setDoc(doc(this.firestore, "users", this.userId), {
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city,
    })
    this.dialogRef.close(DialogEditAdressComponent);
  }

  

}
