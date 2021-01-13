import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadXMLDoc();

  }

  loadXMLDoc(): void {
    //reveiller le Back Heroku
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        console.log("HerokuBack UP");
      }
    };
    xhttp.open("GET", "https://web-pierre-hebinger-back.herokuapp.com/", true);
    xhttp.send();
  }

}
