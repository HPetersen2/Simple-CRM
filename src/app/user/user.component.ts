import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc, onSnapshot, addDoc, getDocs  } from "firebase/firestore"; 


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore = inject(Firestore);
  userCollection = collection(this.firestore, 'users');

  async ngOnInit() {
    const usersRef = collection(this.firestore, "users");
    const querySnapshot = await getDocs(usersRef);
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
