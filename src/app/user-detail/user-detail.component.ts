import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, onSnapshot } from "firebase/firestore";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private route: ActivatedRoute, public dialog:MatDialog) { }

  userId:any = '';
  firestore = inject(Firestore);

  userData = new User();

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
    });

    const userRef = doc(this.firestore, "users", this.userId);
    onSnapshot(userRef, (doc) => {
      this.userData = doc.data() as User;
    })

  }

  editAdress() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.userData = new User(this.userData);
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.userData = new User(this.userData);
    dialog.componentInstance.userId = this.userId;
  }

}
