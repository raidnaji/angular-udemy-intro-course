import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayDetails = false;
  buttonName = 'Show';
  buttonClicks = [];
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDetailsClick(event: Event) {
    this.displayDetails = !this.displayDetails;

    if(this.displayDetails) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    this.count++;
    // this.buttonClicks.push(this.count);
    this.buttonClicks.push(new Date);
    return this.buttonClicks

  }

  getColor(i) {
    if (i >= 4) {
      return 'blue'
    }
    console.log(this.count)
}

}
