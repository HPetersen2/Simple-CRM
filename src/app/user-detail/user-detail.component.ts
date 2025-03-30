import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, onSnapshot } from "firebase/firestore";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  constructor(private route: ActivatedRoute) {}

  userId:any = '';
  firestore = inject(Firestore);
  userData:any = [];

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
    });

    const unsub = onSnapshot(doc(this.firestore, "users", this.userId), (doc) => {
      this.userData.push(doc.data());
    });
  }



}
