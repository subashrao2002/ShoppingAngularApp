import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app';
  loadedFeature = 'Recipe';
  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }
  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyCU95T1gQi2kuzaiIfz-BJPZ5qo2gXB1_8",
        authDomain: "angularrecipe-book.firebaseapp.com",
      }
    );
  }
}
