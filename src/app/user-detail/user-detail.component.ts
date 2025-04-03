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

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private route: ActivatedRoute, public dialog:MatDialog) {}

  userId:any = '';
  firestore = inject(Firestore);
  userData:any = [];

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
    });

    const unsub = onSnapshot(doc(this.firestore, "users", this.userId), (doc) => {
      this.userData = doc.data();
    });
  }

  editAdress() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.userData = this.userData;
  }

  editUserDetail() {
    this.dialog.open(DialogEditUserComponent);
  }


}
