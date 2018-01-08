import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent {

  items: Observable<any[]>;

  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  // }
}
