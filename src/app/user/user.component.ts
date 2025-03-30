import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { doc, setDoc, onSnapshot, addDoc, getDocs, collection, query, where} from "firebase/firestore";
import { User } from '../interfaces/user';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore = inject(Firestore);
  userCollection = collection(this.firestore, 'users');
  allUsers:any = [];

  ngOnInit() {
    const q = query(collection(this.firestore, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        this.allUsers.push({ id: doc.id, ...userData });
      });
    });
  }
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
