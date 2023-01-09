import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-bit',
  templateUrl: './second-bit.component.html',
  styleUrls: ['./second-bit.component.css']
})
export class SecondBitComponent implements OnInit {

  someWords: string = "What?";

  constructor() { }

  ngOnInit() {
  }

  insultWordpress() {
    console.log(this.someWords);
    this.someWords = "Wordpress is grim.";
    console.log(this.someWords);
    return this.someWords;
  }
}
