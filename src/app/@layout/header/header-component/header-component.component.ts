import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  time: any;
  active: string = ""

  constructor() {
    this.getCurrentDate()
  }

  ngOnInit(): void {
  }

  log(data: string): void {
    console.log(data);
  }

  // global variable for string interpolation on html
  getCurrentDate() {
    setInterval(() => {
      let date = new Date();
      this.time = date.toLocaleString(); //set time variable with current date
      this.active = date.getHours() > 12 ? "error" : "success"
    }, 1000); // set it every one seconds
  }
}



