import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliderItems = [0, 1, 2];
  counter = 0;
  tm = interval(4000);

  constructor() {}
  ngOnInit(): void {
    this.tm.subscribe(() => {
      this.showNextImage();
    });
  }
  showNextImage() {
    if (this.counter < this.sliderItems.length - 1) {
      this.counter += 1;
    } else {
      this.counter = 0;
    }
  }
}

// [ngStyle]="{
//   visibility: id === counter ? 'visible' : 'hidden',
//   opacity: 0
// }"
